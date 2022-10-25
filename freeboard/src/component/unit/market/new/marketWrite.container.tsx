import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import MarketPresenter from "./marketWrite.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./marketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../../commons/hooks/useAuth";
import { IMarketContainerProps } from "./marketWrite.types";
import { FailModal } from "../../../commons/modal/commonsModal";

declare const window: Window &
  typeof globalThis & {
    toastui: any;
  };

export default function MarketContainer(P: IMarketContainerProps) {
  useAuth();
  const { isEdit, existingData, loading } = P;
  // const [fileUrls, setFileUrls] = useState(["", ""]);

  const [previewUrls, setPreviewUrls] = useState<string[]>(["", "", ""]);
  const [uploadFiles, setUploadFiles] = useState<File[]>(["", "", ""]);
  const [fetchUrls, setFetchUrls] = useState<string[]>([]);

  const contentsRef = useRef();
  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required(),
    remarks: yup.string().required(),
    price: yup.number().required(),
    contents: yup.string().required(),
    tags: yup.string(),
    useditemAddress: yup.object({
      lat: yup.number(),
      lng: yup.number(),
      zipcode: yup.string(),
      address: yup.string(),
      addressDetail: yup.string(),
    }),
  });
  const { register, handleSubmit, formState, setValue, getValues, control } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
      defaultValues: {
        name: "",
        remarks: "",
        contents: "",
        price: 0,
        tags: "",
        useditemAddress: {
          lng: "",
          lat: "",
          zipcode: "",
          address: "",
          addressDetail: "",
        },
      },
    });
  const address = useWatch({ control, name: "useditemAddress.address" });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  useEffect(() => {
    if (!loading) {
      if (!existingData?.fetchUseditem) return;

      setValue("name", existingData?.fetchUseditem.name);
      setValue("remarks", existingData?.fetchUseditem.remarks);
      setValue("contents", existingData?.fetchUseditem.contents);
      setValue("price", existingData?.fetchUseditem.price);
      setValue("tags", existingData?.fetchUseditem.tags);
      setValue(
        "useditemAddress.address",
        existingData?.fetchUseditem.useditemAddress?.address
      );
      setValue(
        "useditemAddress.addressDetail",
        existingData?.fetchUseditem.useditemAddress?.addressDetail
      );
      setValue(
        "useditemAddress.lat",
        existingData?.fetchUseditem.useditemAddress?.lat
      );
      setValue(
        "useditemAddress.lng",
        existingData?.fetchUseditem.useditemAddress?.lng
      );
      setValue(
        "useditemAddress.zipcode",
        existingData?.fetchUseditem.useditemAddress?.zipcode
      );

      existingData?.fetchUseditem.images
        ? setFetchUrls(existingData?.fetchUseditem.images)
        : [];
    }
  }, [loading]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=197590e1eca014c399a79f6900e8f800&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          getValues("useditemAddress.address"),
          function (
            result: {
              y: any;
              x: any;
            }[],
            status: any
          ) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 위치</div>',
              });
              infowindow.open(map, marker);

              setValue("useditemAddress.lat", coords.Ma);
              setValue("useditemAddress.lng", coords.La);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [address]);

  // const onChangeFileUrls = async (fileUrl: string, index: number) => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

  const onChangeUrlsFiles = (url: string, file: File, index: number) => {
    const tempPreviewUrls = [...previewUrls];
    tempPreviewUrls[index] = url;
    setPreviewUrls(tempPreviewUrls);

    const tempUploadFiles = [...uploadFiles];
    tempUploadFiles[index] = file;
    setUploadFiles(tempUploadFiles);
  };

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue("contents", text === "<p><br><p>" ? "" : text);
  };

  const onClickSubmit = async (data: any) => {
    try {
      const uploadResults = await Promise.all(
        uploadFiles.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = uploadResults.map((el) =>
        el ? el.data?.uploadFile.url : ""
      );

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: resultUrls,
          },
        },
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      const uploadResults = await Promise.all(
        uploadFiles.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = uploadResults.map((el, i) =>
        el
          ? el.data?.uploadFile.url
          : existingData?.fetchUseditem.images?.[i]
          ? existingData?.fetchUseditem.images?.[i]
          : ""
      );

      const result = await updateUseditem({
        variables: {
          useditemId: String(router.query.detail),
          updateUseditemInput: {
            ...data,
            images: resultUrls,
          },
        },
      });
      router.push(`/market/${result.data?.updateUseditem._id}`, undefined, {
        shallow: true,
      });
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickCancel = () => {
    router.back();
  };

  return (
    <>
      <MarketPresenter
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onClickCancel={onClickCancel}
        register={register}
        setValue={setValue}
        handleSubmit={handleSubmit}
        formState={formState}
        // fileUrls={fileUrls}
        // onChangeFileUrls={onChangeFileUrls}
        isEdit={isEdit}
        existingData={existingData}
        onChangeContents={onChangeContents}
        contentsRef={contentsRef}
        previewUrls={previewUrls}
        onChangeUrlsFiles={onChangeUrlsFiles}
        fetchUrls={fetchUrls}
      />
    </>
  );
}
