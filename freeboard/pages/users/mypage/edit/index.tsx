import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IQuery } from "../../../../src/commons/types/generated/types";
import useAuth from "../../../../src/component/commons/hooks/useAuth";
import { useMoveToPage } from "../../../../src/component/commons/hooks/useMoveToPage";
import Input01 from "../../../../src/component/commons/inputs/01/input01";
import Upload04 from "../../../../src/component/commons/uploads/04/upload04";
import {
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
  UPLOAD_FILE,
} from "../../../../src/component/unit/users/edit/edit.quries";
import * as S from "../../../../src/component/unit/users/edit/edit.styles";
import * as yup from "yup";
const schema = yup.object({
  name: yup.string().required("false").min(2, "false").max(6, "false"),
});

export default function UserEditPage() {
  useAuth();
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [uploadReadyFile, setUploadReadyFile] = useState<File>();
  const [fetchUrl, setFetchUrl] = useState<Maybe<string> | undefined>();
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data: fetchLoggedData, loading } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const onChangeUrlsFiles = (url: string, file: File) => {
    setPreviewUrl(url);
    setUploadReadyFile(file);
  };

  useEffect(() => {
    if (!loading) {
      setFetchUrl(fetchLoggedData?.fetchUserLoggedIn.picture);
      setValue("name", fetchLoggedData?.fetchUserLoggedIn.name);
    }
  }, [fetchLoggedData]);

  const onClickSubmit = async (data: any) => {
    let resultUrl = fetchLoggedData?.fetchUserLoggedIn.picture;
    try {
      if (uploadReadyFile !== undefined) {
        const result = await uploadFile({
          variables: {
            file: uploadReadyFile,
          },
        });
        resultUrl = result.data.uploadFile.url;
      } else {
        resultUrl = fetchLoggedData?.fetchUserLoggedIn.picture;
      }

      const rere = await updateUser({
        variables: {
          updateUserInput: {
            name: data.name,
            picture: resultUrl,
          },
        },
      });
      console.log(rere);
      Modal.info({ content: "회원정보 수정 완료!" });
      router.push("/users/mypage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <S.Container>
        <S.PageTitle>회원정보 수정</S.PageTitle>
        <S.LabelWrapper onSubmit={handleSubmit(onClickSubmit)}>
          <S.Label>이름</S.Label>
          <Input01
            type="text"
            register={register("name")}
            placeholder="변경할 이름을 적어주세요."
            error={formState.errors.name?.message}
          />
          <S.Label>프로필</S.Label>
          <Upload04
            preview={previewUrl}
            fetchUrl={fetchUrl}
            onChangeUrlsFiles={onChangeUrlsFiles}
          />
          <S.UserUpdateBtn>회원정보 수정</S.UserUpdateBtn>
        </S.LabelWrapper>
        <S.PwUpdateBtn
          type="button"
          onClick={onClickMoveToPage("/users/mypage/edit/password")}
        >
          비밀번호 변경
        </S.PwUpdateBtn>
      </S.Container>
    </>
  );
}
