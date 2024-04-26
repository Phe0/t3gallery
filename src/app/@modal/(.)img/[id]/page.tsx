import { stringToNumber } from "~/app/utils/numbers";
import { Modal } from "./modal";
import FullPageImgView from "~/components/full-page-img-view";

interface ImgModalProps {
  params: { id: string };
}

export default function ImgModal({ params: { id: imgId } }: ImgModalProps) {
  return (
    <Modal>
      <FullPageImgView imgId={stringToNumber(imgId)} />
    </Modal>
  );
}
