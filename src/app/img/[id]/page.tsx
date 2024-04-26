import { stringToNumber } from "~/app/utils/numbers";
import FullPageImgView from "~/components/full-page-img-view";

interface ImgPageProps {
  params: { id: string };
}

export default function ImgPage({ params: { id: imgId } }: ImgPageProps) {
  return <FullPageImgView imgId={stringToNumber(imgId)} />;
}
