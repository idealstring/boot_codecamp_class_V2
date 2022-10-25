import { UseFormSetValue } from "react-hook-form";

export type IZipcodeModalMarketProps = {
  setValue: UseFormSetValue<{
    name: string;
    remarks: string;
    contents: string;
    price: number;
    tags: string;
    useditemAddress: {
      lng: string;
      lat: string;
      zipcode: string;
      address: string;
      addressDetail: string;
    };
  }>;
};
