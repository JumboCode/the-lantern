import prisma from "../prisma/prisma";

import { EventType } from "../src/types/event";
import { ProfileType } from "../src/types/profile";

// Function to update an event by id
async function handleUpdateEvent(eventID: any, updateData: EventType) {
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id: eventID,
      },
      data: updateData,
    });
    return updatedEvent;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
}

// Function to update a profile by id
async function handleUpdateProfile(profileID: any, updateData: ProfileType) {
  try {
    console.error(updateData)
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


export { handleUpdateProfile, handleUpdateEvent };
