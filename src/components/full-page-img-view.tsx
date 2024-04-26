import { getImage } from "~/server/queries";

interface FullPageImgViewProps {
  imgId: number;
}

export default async function FullPageImgView({ imgId }: FullPageImgViewProps) {
  const image = await getImage(imgId);
  return <img src={image.url} alt={image.name} className="w-96" />;
}
