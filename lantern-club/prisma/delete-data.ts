import prisma from "../prisma/prisma";

async function handleDeleteEvent(eventID: sany) {
  const event = await prisma.event.delete({
    where: {
      id: eventID,
    },
  });

  return event;
}

async function handleDeleteProfile(profileID: any) {
  try {
    const deletedProfile = await prisma.profile.delete({
      where: {
        id: profileID,
      },
    });
    return deletedProfile;
  } catch (error) {
    console.error("Error deleting profile:", error);
    throw error; 
  }
}

export { handleDeleteEvent, handleDeleteProfile };
