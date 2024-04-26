import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
      ].map((image) => (
        <Link
          href={`/img/${image.id}`}
          key={image.id}
          className="flex w-48 flex-col justify-between rounded-lg border-4"
        >
          <div className="flex h-full flex-col justify-center">
            <Image src={image.url} alt={image.name} width={192} height={192} />
          </div>
          <div className="border-t-2 p-2 text-center">{image.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
