import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { MutableRefObject } from "react";

type IEditorPageProps = {
  contentsRef: MutableRefObject<undefined>;
  onChangeContents: (text: any) => void;
  initialValue: string | undefined;
};

export default function EditorPage(P: IEditorPageProps) {
  const { contentsRef, onChangeContents, initialValue } = P;
  return (
    <Editor
      ref={contentsRef}
      height="auto"
      max-height="1000px"
      initialEditType="wysiwyg"
      placeholder="내용을 입력해 주세요."
      hideModeSwitch={true}
      onChange={onChangeContents}
      language="ko-KR"
      initialValue={initialValue}
    />
  );
}
