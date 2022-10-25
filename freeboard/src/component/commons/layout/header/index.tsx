import HeaderContainer from "../../../unit/layout/header/header.container";
import { IHeaderProps } from "../../../unit/layout/header/header.types";

export default function Header(P: IHeaderProps) {
  const { onClickIsNav } = P;

  return (
    <>
      <HeaderContainer onClickIsNav={onClickIsNav} />
    </>
  );
}
