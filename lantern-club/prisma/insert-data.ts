import prisma from "../prisma/prisma";
import { EventType } from "@/types/event";
import { ProfileType } from "@/types/profile";

async function handleAddEvent(eventData: EventType) {
  return await prisma.event.create({ data: eventData });
}


async function handleAddProfile(profileData: ProfileType) {
  return await prisma.profile.create({
      data: profileData,
  });
};

//we want to export this so that we can get the data in another function
export { handleAddEvent, handleAddProfile };
