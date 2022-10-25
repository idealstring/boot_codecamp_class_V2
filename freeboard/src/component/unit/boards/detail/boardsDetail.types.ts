import { BlockList } from "net";

export type IBoardDetailPresenterProps = {
  data: any;
  onClickLinkModal: () => void;
  onClickMapModal: () => void;
  modal: {
    link: boolean;
    map: boolean;
  };
  onClickLikeBtn: () => void;
  onClickDislikeBtn: () => void;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
};

export type IScreenProps = {
  isNormalScreen?: Boolean;
  isMobile?: Boolean;
};
