import prisma from "../prisma/prisma";

async function insertEvent() {
  const eventsData = await prisma.event.create({
    data: {
      name: "Sample Event",
      description: "Sample Description",
      date: new Date("2023-11-13"),
      time: new Date("2023-11-13T11:01:00"),
      location: "Sample Location",
      host: "Sample Host",
      imageURL: "https://placehold.co/400",
    },
  });
  const event = await prisma.event.create({ data: eventsData });
  return event;
}

// create a separate insert function so that everything isn't inserted at the same time

async function handleAddProfile(profileData: ProfileType) {
  return await prisma.profile.create({
      data: profileData,
  });
};

//we want to export this so that we can get the data in another function
export { insertEvent, handleAddProfile };
