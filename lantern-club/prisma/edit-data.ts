import prisma from "../prisma/prisma";

import { EventType } from "../src/types/event";

// Function to update a event by id
async function handleUpdateUser(props: EventType) {
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

// Function to update a profile by id
async function handleUpdateProfile(profileID: any, updateData: any) {
  try {
    const updatedProfile = await prisma.profile.update({
      where: {
        id: profileID, 
      },
      data: updateData,
    });
    return updatedProfile;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error; 
  }
}

export { handleUpdateProfile, handleUpdateUser };
