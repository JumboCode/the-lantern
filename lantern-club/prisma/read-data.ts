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
    // try {
        const events = await prisma.event.findMany()
        console.log(events)
    // }
}

// gets a specific event from the events model by ID

async function fetchEventbyID(eventId) {
    const event = await prisma.event.findUnique({
        where: {
          id: eventId,
        },
      });
      console.log(event);
}

async function handleFetchEvents(req: NextApiRequest, res: NextApiResponse) {
    try {
        await fetchAllEvents()

      const responseData = { message: 'events: GET requested received' };
      res.status(200).json(responseData);
    } catch (error) {
      console.error('Error handling GET request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {fetchAllEvents, fetchEventbyID, handleFetchEvents}; 