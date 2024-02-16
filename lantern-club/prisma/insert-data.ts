import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();


async function insertEvent() {
    const eventsData = await prisma.event.create({
        data : {
            name: 'Sample Event',
            description: 'Sample Description',
            date: new Date('2023-11-13'),          
            time: new Date('2023-11-13T11:01:00'),        
            location: 'Sample Location',    
            host: 'Sample Host', 
        }
   })
    const event = await prisma.event.create({ data: eventsData });
    return event
}

// create a separate insert function so that everything isn't inserted at the same time

async function insertProfile() {

    const profilesData = await prisma.profile.create({
        data : {
                name: 'Sample Name', 
                email: 'Sample Email',
                role: 'Sample Role',
                pictureURL: 'Sample Picture URL',
            }   
    })
    const profile = await prisma.profile.create({ data: profilesData});
    return profile
}

/*
app.post(`/post`, async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    })
    res.json(result)
  })
*/
// Link to github examples: 
// https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes/src/pages/api/post/index.ts

// async function handle (
//     req: NextApiRequest, 
//     res : NextApiResponse, 
    
// ) {
//     const {name, email, role, pictureURL }  = req.body
//     const result = await prisma.post.create({
//         data: {
//             name,
//             email,
//             role,
//             pictureURL,
//         },
//     })
//     res.json(result);

// }

async function handlePostEvent() {
    try {
      // Common logic for handling POST requests
      const responseData = await insertEvent();
      return responseData;
    } catch (error) {
      console.error('Error handling POST request:', error);
    }
  }
  
  async function handlePostProfile() {
    try {
      // Common logic for handling POST requests
      const responseData = await insertProfile();
      return responseData;
    } catch (error) {
      console.error('Error handling POST request:', error);
    }
  }
  
//we want to export this so that we can get the data in another function
export {insertEvent, insertProfile, handlePostEvent, handlePostProfile}; 
