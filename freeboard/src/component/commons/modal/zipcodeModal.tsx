import { Modal } from "antd";
import { useState } from "react";
import * as S from "../../unit/modal/zipcode/zipcodeModal.styles";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { IZipcodeModalP } from "../../unit/modal/zipcode/zipcodeModal.types";

const ZipcodeModal = (P: IZipcodeModalP) => {
  const { setInputData } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalToggle = () => {
    setIsModalOpen((toggle) => !toggle);
  };

  const handleComplete = (address: Address) => {
    setInputData((state) => {
      return {
        ...state,
        zipcode: address.zonecode,
        address: address.address,
        addressDetail: address.buildingName,
      };
    });
    onClickModalToggle();
  };

  return (
    <>
      <S.ZipcodeModal onClick={onClickModalToggle}>
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

export default ZipcodeModal;
