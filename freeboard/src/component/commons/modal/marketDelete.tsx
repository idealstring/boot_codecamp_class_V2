import { Modal } from "antd";
import { useContext } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { PostFail } from "./commonsModal";
import { WindowSizeContext } from "../responsive";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../commons/types/generated/types";
import { DELETE_USEDITEM } from "../../unit/modal/marketDelete/boardDelete.queries";
import { ContentBtn } from "../../unit/modal/marketDelete/boardDelete.styles";
const { confirm } = Modal;

const MarketDeleteModal = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);
  const { isMobile } = useContext(WindowSizeContext);

  const onClickDeleteBtn = async () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: String(router.query.detail),
        },
      });
      router.push("/market");
    } catch (error) {
      if (error instanceof Error) PostFail(error.message);
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
      삭제
    </ContentBtn>
  );
};
export default MarketDeleteModal;
