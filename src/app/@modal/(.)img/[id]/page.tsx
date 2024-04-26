import { stringToNumber } from "~/app/utils/numbers";
import { getImage } from "~/server/queries";

interface ImgModalProps {
  params: { id: string };
}

export default async function ImgModal({
  params: { id: imgId },
}: ImgModalProps) {
  const image = await getImage(stringToNumber(imgId));
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
