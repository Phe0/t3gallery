import { getImage } from "~/server/queries";

interface FullPageImgViewProps {
  imgId: number;
}

export default async function FullPageImgView({ imgId }: FullPageImgViewProps) {
  const image = await getImage(imgId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
