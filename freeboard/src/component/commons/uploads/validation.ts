import { FailModal } from "../modal/commonsModal";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    FailModal("파일이 없습니다.");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    FailModal("파일이 큽니다. (5MB 초과 제한)");
    return false;
  }
  if (
    !file.type.includes("png") &&
    !file.type.includes("jpeg") &&
    !file.type.includes("webp")
  ) {
    FailModal("파일 확장자가 올바르지 않습니다.(png, jpeg, webp만 가능)");
    return false;
  }
  return file;
}
