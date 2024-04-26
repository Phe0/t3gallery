import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

interface FullPageImgViewProps {
  imgId: number;
}

export default async function FullPageImgView({ imgId }: FullPageImgViewProps) {
  const image = await getImage(imgId);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 justify-between">
      <div className="flex w-full flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l bg-black">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
