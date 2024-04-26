import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

function getUser() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  return user;
}

export async function getMyImages() {
  const user = getUser();

  return await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
}

export async function getImage(id: number) {
  const user = getUser();

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image Not found");
  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
}
