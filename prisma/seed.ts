
import { PrismaClient } from '@prisma/client'; 

const prisma =  new PrismaClient();
async function seed() {
    await prisma.user.createMany({
        data: [
            {name: "Mostafa", email: "mostafa@gmail.com"},
            {name: "Arina", email: "arina@gmail.com"}
        ]
    });

    
}


seed().then(() => prisma.$disconnect());