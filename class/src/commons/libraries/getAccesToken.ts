// import { gql } from "@apollo/client"; // 여기서 gql은 어디서 가져오든 상관 없음.
import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      {
        credentials: "include", // 서버 통신 시 사용자는 꺼낼 수 없고 서버와만 통신할 수 있는 그 쿠키값을 포함한다는 것.
      }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error)
      console.log("restoreAccessToken 재발급 Error" + error.message);
  }
};
