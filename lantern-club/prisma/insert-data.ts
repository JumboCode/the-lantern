import prisma from "../prisma/prisma";
import { EventType } from "@/types/event";
import { ProfileType } from "@/types/profile";
import { FeaturedMagType } from "@/types/featuredmag"


async function handleAddEvent(eventData: EventType) {
  return await prisma.event.create({ data: eventData });
}


async function handleAddProfile(profileData: ProfileType) {
  return await prisma.profile.create({
      data: profileData,
  });
};
async function handleAddFeaturedMag(urlData: FeaturedMagType) {
  return await prisma.featuredMag.create({
      data: urlData,
  });
};

//we want to export this so that we can get the data in another function
export { handleAddEvent, handleAddProfile, handleAddFeaturedMag};
