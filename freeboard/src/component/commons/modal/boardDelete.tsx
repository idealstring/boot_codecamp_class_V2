import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IMutation } from "../../../commons/types/generated/types";
import { DELETE_BOARD } from "../../unit/modal/boardDelete/boardDelete.queries";
import { ContentBtn } from "../../unit/modal/boardDelete/boardDelete.styles";
import { WindowSizeContext } from "../responsive";
import { FailModal } from "./commonsModal";
const { confirm } = Modal;

const BoardDeleteModal = () => {
  const router = useRouter();
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);
  const { isMobile } = useContext(WindowSizeContext);

  const onClickDeleteBtn = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.detail,
        },
      });
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "게시물 삭제",
      icon: <ExclamationCircleOutlined style={{ color: "#b1312d" }} />,
      content: `삭제하시면 다시 복구할 수 없습니다. 정말 삭제하시겠습니까?`,
      okText: "예",
      okType: "danger",
      cancelText: "아니오",
      centered: true,

      onOk() {
        onClickDeleteBtn();
      },

      onCancel() {},
    });
  };
  return (
    <ContentBtn onClick={showDeleteConfirm} isMobile={isMobile}>
      삭제하기
    </ContentBtn>
  );
};
export default BoardDeleteModal;
