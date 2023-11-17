import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();


async function insertEvent() {
    //let eventsData: Prisma.Event;
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

//    const profilesData = await prisma.profile.create({
//     data : {
//             name: 'Sample Name', 
//             email: 'Sample Email',
//             role: 'Sample Role',
//             pictureURL: 'Sample Picture URL',
//         }   
//     })
    /*
    const eventsData = await.prisma.event.create ({
    data: {
        name: 'Sample Event',
        description: 'Sample Description',
        date: new Date('2023-11-13'),          
        time: new Date('2023-11-13T11:01:00'),        
        location: 'Sample Location',    
        host: 'Sample Host',         
    };
    })
    
    const profilesData = 
    {
        name: 'Sample Name', 
        email: 'Sample Email',
        role: 'Sample Role',
        pictureURL: 'Sample Picture URL',
    };
    */
    
    const createEvent = await prisma.event.create({ data: eventsData });

}


// main()

//   .then(async () => {
//     /* trying to publish event record using update query
//      * not sure if this works... 
//      */
//     const event = prisma.event.update({
//         where: {id: '1'},
//         data: true
//     });
//     console.log(event);

//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

export default insertEvent; 
//we want to export this so that we can get the data in another function
