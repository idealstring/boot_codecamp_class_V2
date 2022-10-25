import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import BoardWritePresenter from "./boardsWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardsWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  IMyVrivables,
  IInputDateProps,
  IUpdateBoardAddress,
  IInnerUpdateBoardInput,
  IBoardWriteContainerProps,
} from "./boardsWrite.types";
import { FailModal, SuccessModal } from "../../../commons/modal/commonsModal";

export default function BoardWriteContainer(P: IBoardWriteContainerProps) {
  const { isEdit, data: existingData } = P;
  const router = useRouter();
  const uploadFileInputRef = useRef<HTMLInputElement>(null);

  const [inputData, setInputData] = useState<IInputDateProps>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    zipcode: "",
    address: "",
    addressDetail: "",
    youtubeUrl: "",
    fileUrls: ["", "", ""],
  });
  const [errorOutput, setErrorOutput] = useState({
    writer: false,
    password: false,
    title: false,
    contents: false,
  });
  const [isCompleteColor, setIsCompleteColor] = useState(false);

  const [SubmitInputData] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [UpdateInputData] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData((inputData) => {
      return { ...inputData, [e.target.id]: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorOutput({ ...errorOutput, [e.target.id]: false });
    }

    const { writer, password, title, contents } = inputData;
    writer && password && title && contents
      ? setIsCompleteColor(true)
      : setIsCompleteColor(false);
    if (isEdit) password ? setIsCompleteColor(true) : setIsCompleteColor(false);
  };

  const onChangeFileUrls = async (fileUrl: string, index: number) => {
    const newFileUrls = [...inputData.fileUrls];
    newFileUrls[index] = fileUrl;
    setInputData({ ...inputData, fileUrls: newFileUrls });
  };

  useEffect(() => {
    if (existingData?.fetchBoard.images?.length) {
      setInputData({
        ...inputData,
        fileUrls: [...existingData?.fetchBoard.images],
      });
    }
  }, [existingData]);

  const CreateBtn = async () => {
    if (!inputData.writer) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, writer: true };
      });
    }
    if (!inputData.password) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, password: true };
      });
    }
    if (!inputData.title) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, title: true };
      });
    }
    if (!inputData.contents) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, contents: true };
      });
    }

    const {
      writer,
      password,
      title,
      contents,
      zipcode,
      address,
      addressDetail,
      youtubeUrl,
      fileUrls,
    } = inputData;
    if (writer && password && title && contents) {
      try {
        const result = await SubmitInputData({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: fileUrls,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        SuccessModal("게시물 등록했습니다.");
        await router.push(`/boards/${result?.data?.createBoard._id || ""}`);
      } catch (error) {
        if (error instanceof Error) FailModal(error.message);
      }
    }
  };

  const UpdateBtn = async () => {
    const boardAddress: IUpdateBoardAddress = {};
    const InnerUpdateBoardInput: IInnerUpdateBoardInput = {};

    const myVariables: IMyVrivables = {
      boardId: String(router.query.detail),
      password: inputData.password,
      updateBoardInput: InnerUpdateBoardInput,
    };

    if (inputData.title) {
      myVariables.updateBoardInput.title = inputData.title;
    }
    if (inputData.contents) {
      myVariables.updateBoardInput.contents = inputData.contents;
    }
    if (inputData.youtubeUrl) {
      myVariables.updateBoardInput.youtubeUrl = inputData.youtubeUrl;
    }
    if (inputData.fileUrls) {
      myVariables.updateBoardInput.images = inputData.fileUrls;
    }
    console.log(myVariables);
    if (inputData.zipcode || inputData.address || inputData.addressDetail) {
      myVariables.updateBoardInput = {
        ...myVariables.updateBoardInput,
        boardAddress: {},
      };

      if (inputData.zipcode) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.zipcode = inputData.zipcode;
      }
      if (inputData.address) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.address = inputData.address;
      }
      if (inputData.addressDetail) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.addressDetail =
          inputData.addressDetail;
      }
    }

    if (inputData.password) {
      try {
        const result = await UpdateInputData({
          variables: myVariables,
        });
        SuccessModal("게시물 수정했습니다.");
        await router.push(`/boards/${result?.data?.updateBoard._id || ""}`);
      } catch (error) {
        if (error instanceof Error) FailModal(error.message);
      }
    } else {
      setErrorOutput({ ...errorOutput, password: true });
      FailModal("비밀번호를 입력하세요.");
    }
  };

  const CreateCancelBtn = async () => {
    await router.push(`/boards/`);
  };

  const UpdateCancelBtn = async () => {
    await router.push(`/boards/${String(router.query.detail)}`);
  };

  const onClickUploadFileBtn = () => {
    uploadFileInputRef.current?.click();
  };

  return (
    <BoardWritePresenter
      errorOutput={errorOutput}
      onChangeInput={onChangeInput}
      onChangeFileUrls={onChangeFileUrls}
      CreateBtn={CreateBtn}
      UpdateBtn={UpdateBtn}
      CreateCancelBtn={CreateCancelBtn}
      UpdateCancelBtn={UpdateCancelBtn}
      isCompleteColor={isCompleteColor}
      isEdit={isEdit}
      existingData={existingData}
      setInputData={setInputData}
      inputData={inputData}
      onClickUploadFileBtn={onClickUploadFileBtn}
    />
  );
}
