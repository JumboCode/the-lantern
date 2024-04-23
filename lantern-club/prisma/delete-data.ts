import prisma from "../prisma/prisma";


async function handleDeleteEvent(eventID: any) {
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

async function handleDeleteFeaturedMag() {
  try {
    const first = await prisma.featuredMag.findFirst();
    if (first) {
      console.log(`deleting first: ${first.cloudURL}`)
      const deletedFeaturedMag = await prisma.featuredMag.delete({
        where: {
          id: first.id,
        },
      });
      return deletedFeaturedMag;
    }
    
  } catch (error) {
    console.error("Error deleting old featured mag:", error);
    throw error; 
  }
}

export { handleDeleteEvent, handleDeleteProfile, handleDeleteFeaturedMag };
