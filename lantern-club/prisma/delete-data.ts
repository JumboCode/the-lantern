import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

async function handleDeleteEvent(eventID: string) {
  const event = await prisma.event.delete({
    where: {
      id: eventID,
    },
  });

  return event;
}

export { handleDeleteEvent };
