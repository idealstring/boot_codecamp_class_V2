import { Modal } from "antd";

export function SuccessModal(content: string) {
  Modal.success({
    content: content,
    centered: true,
    onOk() {},
  });
}

export function InfoModal(content: string) {
  Modal.info({
    content: content,
    centered: true,
    onOk() {},
  });
}

export function FailModal(content: string) {
  Modal.error({
    content: content,
    centered: true,
    onOk() {},
  });
}

export function WarnModal(content: string) {
  Modal.warn({
    content: content,
    centered: true,
    onOk() {},
  });
}
