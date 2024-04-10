import prisma from "../prisma/prisma";
import { EventType } from "@/types/event";
import { ProfileType } from "@/types/profile";

async function handleAddEvent(eventData: EventType) {
        const imageURL: string = eventData.imageURL ?? ""; 
        const eventDataWithImageURL = { ...eventData, imageURL };
  return await prisma.event.create({ data: eventDataWithImageURL });
}


async function handleAddProfile(profileData: ProfileType) {
        const pictureURL: string = profileData.pictureURL ?? ""; 
        const profileDataWithPictureURL = { ...profileData, pictureURL };
  return await prisma.profile.create({
      data: profileDataWithPictureURL,
  });
};

//we want to export this so that we can get the data in another function
export { handleAddEvent, handleAddProfile };
