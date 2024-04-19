import prisma from "../prisma/prisma";

// gets all events from the events model in mongodb
async function handleFetchEvents() {
  const responseData = await prisma.event.findMany();
  return responseData;
}

// gets all profiles from the profiles model in mongodb

async function handleFetchProfiles() {
  const profiles = await prisma.profile.findMany();
  return profiles;
}

// gets a specific event from the events model by ID

async function fetchEventbyID(eventId: string) {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });
  // console.log(event);
}

export { fetchEventbyID, handleFetchEvents, handleFetchProfiles };
