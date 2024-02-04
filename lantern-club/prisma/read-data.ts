import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();


// async function readEvent() {
//     const event = await prisma.event.findUnique({
//         where: {
//             id: 
//         }
//     }
// })

// gets all events from the events model in mongodb

async function fetchAllEvents() {
  const events = await prisma.event.findMany()
  return events
}

// gets a specific event from the events model by ID

async function fetchEventbyID(eventId) {
    const event = await prisma.event.findUnique({
        where: {
          id: eventId,
        },
      });
      // console.log(event);
}

async function handleFetchEvents() {
    const responseData = await fetchAllEvents()
    return responseData
}

export {fetchAllEvents, fetchEventbyID, handleFetchEvents}; 