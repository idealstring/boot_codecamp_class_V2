import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
  // gql,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"; // 아폴로 에러 잡을 땐 임폴트 필수.
import { createUploadLink } from "apollo-upload-client";
// import { GraphQLClient } from "graphql-request";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccesToken";
import { accessTokenState } from "../../../commons/store";

interface IApolloSettingProps {
  children: JSX.Element;
}

// 함수 내에는 계속 리렌더링이 되니까 캐쉬 부분을 따로 함수 밖으로 뺀 것.
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const router = useRouter();

  // 1. 프리렌더링 예제 - process.browser
  // if (process.browser) {
  // console.log("지금은 브라우저!!");
  // const result = localStorage.getItem("accessToken");
  // console.log(result);
  // if (result) setAccessToken(result);
  // } else {
  // console.log("(yarn dev로 실행된) 프론트서버!! ");
  // const result = localStorage.getItem("accessToken");
  // console.log(result);
  // if (result) setAccessToken(result);
  // }

  // 2. 프리렌더링 예제 - typeof window
  // if (typeof window !== "undefined") {
  // console.log("지금은 브라우저!!");
  // const result = localStorage.getItem("accessToken");
  // console.log(result);
  // if (result) setAccessToken(result);
  // } else {
  // console.log("(yarn dev로 실행된) 프론트서버!! ");
  // const result = localStorage.getItem("accessToken");
  // console.log(result);
  // if (result) setAccessToken(result);
  // }

  // 3. 프리렌더링 예제 - useEffect (프리렌더링 무시)
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // console.log("지금은 브라우저!!");
    // const result = localStorage.getItem("accessToken");
    // // console.log(result);
    // if (result) setAccessToken(result);
    // void router.push("/23-02-login-localstorage-success");

    //
    // 2. 새로운 방식(refreshToke 이후)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 아폴로클라이언트에서 오류난 것을 잡음. axios와는 상관없음.
  // graphQLErrors 에러확인
  // operation 토근 만료 여부 확인. 기존 통신 정보를 갖고 있음.
  // forward 재전송
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // fromPromise는 observable 배우면 알게됨.
            // 2-1. refreshToken으로 accessToken 재발급
            // 아폴로 세팅전이기 때문에 mutation이 안됨. rest API로 해야함. 여기선 axios보다 더 간편한 graphql-request 라이브러리로함. 물론 설치해야함.
            // 여기서부턴 쿠키 옵션을 secure 정보가 담긴 정보를 하기 때문에 s를 붙임
            // 내용은 따로 컴포넌트로 뺌. 또 쓸 수 있다함. src/common/libraries
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);

              // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 정보 수정하기
              // getContext() 실패한 쿼리 정보 들어있음.
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 기존 헤더는 그대로 두고
                  Authorization: `Bearer ${newAccessToken}`, // Authorization만 바꿈
                },
              });

              // 3-2. 수정한 쿼리 재요청하기
              // forward(operation); // apollo에서는 observable을 써야하고, 포워드를 flatMap에서 해줘야함.
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 로그인 인증을 해더에 넣어준 것.
    credentials: "include", // https로 하면서 넣어줌. 서버 통신 시 사용자는 꺼낼 수 없고 서버와만 통신할 수 있는 그 쿠키값을 포함한다는 것.
  });

  const client = new ApolloClient({
    // uri: "http://backend09.codebootcamp.co.kr/graphql", // 이미지 기능 추가하며 위로 옮김
    link: ApolloLink.from([errorLink, uploadLink]),
    // 관련 내용을 여기다라 링크 시킴. ApolloLink를 가져와서 링크하는데, 인증 등 여러가지 링크하게 되기때문에 배열로 받는다.
    cache: GLOBAL_STATE, // 페이지전환(_app.tsx 리렌더)되도, 캐시 유지.
    connectToDevTools: true,
  });
  // prettier-ignore
  return <ApolloProvider client={client}>
        {props.children}   
    </ApolloProvider>;
}
