import { BlockList } from "net";

export type IBoardDetailPresenterProps = {
  data: any;
  onClickLinkModal: (link: string) => any;
  onClickMapModal: () => void;
  mapModal: boolean;
  onClickLikeBtn: () => void;
  onClickDislikeBtn: () => void;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
};

export type IScreenProps = {
  isNormalScreen?: Boolean;
  isMobile?: Boolean;
};
