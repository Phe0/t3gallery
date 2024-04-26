import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e1b56cbb-b984-4935-a164-9222b6ded502-8596p7.jpeg",
  "https://utfs.io/f/69c20ba8-40e1-4db9-8725-5f5ab31f5b90-ywqv8z.jpg",
  "https://utfs.io/f/58af7902-2427-4c2a-9e26-8eb52f1617bb-hdf3fq.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
