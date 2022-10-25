import { Modal } from "antd";
import { useState } from "react";
import * as S from "../../unit/modal/zipcodeMarket/zipcodeModal.styles";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { IZipcodeModalMarketProps } from "../../unit/modal/zipcodeMarket/zipcodeModal.types";

const ZipcodeModalMarket = (P: IZipcodeModalMarketProps) => {
  const { setValue } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalToggle = () => {
    setIsModalOpen((toggle) => !toggle);
  };

  const handleComplete = (address: Address) => {
    // setValue("useditemAddress", {
    //   lng: "",
    //   lat: "",
    //   zipcode: address.zonecode,
    //   address: address.address,
    //   addressDetail: address.buildingName,
    // });

    setValue("useditemAddress.zipcode", address.zonecode);
    setValue("useditemAddress.address", address.address);
    setValue("useditemAddress.addressDetail", address.buildingName);
    onClickModalToggle();
  };

  return (
    <>
      <S.ZipcodeModal type="button" onClick={onClickModalToggle}>
        우편번호 검색
      </S.ZipcodeModal>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={onClickModalToggle}
          onCancel={onClickModalToggle}
          centered
        >
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            style={{ margin: "20px 0 0 0", height: 450 }}
          />
        </Modal>
      )}
    </>
  );
};

export default ZipcodeModalMarket;
