import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { event } from "../src/types/event";

async function handleUpdateUser(props: event) {
  const response = await prisma.event.update({
    where: {
      id: props.id,
    },
    data: {
      name: props.name || undefined,
      description: props.description || undefined,
      date: props.date || undefined,
      time: props.time || undefined,
      location: props.location || undefined,
      host: props.host || undefined,
      imageURL: props.imageURL || undefined,
    },
  });

  return response;
}

export { handleUpdateUser };
