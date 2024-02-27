import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { event } from "../src/types/event";

async function handleUpdateUser(props: event) {
  const response = await prisma.event.update({
    where: {
      id: props.id,
    },
    data: {
      name: props.name,
      description: props.description,
      date: props.date,
      time: props.time,
      location: props.location,
      host: props.host,
      imageURL: props.imageURL,
    },
  });

  return response;
}

export { handleUpdateUser };
