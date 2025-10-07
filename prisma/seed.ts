
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function seed() {
    await prisma.user.createMany({
        data: [
            {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "age": 34,
                "isMarried": true,
                "nationality": "American"
            },
            {
                "name": "Aisha Khan",
                "email": "aisha.khan@example.com",
                "age": 28,
                "isMarried": false,
                "nationality": "Pakistani"
            },
            {
                "name": "Carlos Rivera",
                "email": "carlos.rivera@example.com",
                "age": 45,
                "isMarried": true,
                "nationality": "Mexican"
            },
            {
                "name": "Emma Brown",
                "email": "emma.brown@example.com",
                "age": 19,
                "isMarried": false,
                "nationality": "British"
            },
            {
                "name": "Li Wei",
                "email": "li.wei@example.com",
                "age": 52,
                "isMarried": true,
                "nationality": "Chinese"
            },
            {
                "name": "Sofia Martinez",
                "email": "sofia.martinez@example.com",
                "age": 29,
                "isMarried": false,
                "nationality": "Spanish"
            },
            {
                "name": "Ahmed Hassan",
                "email": "ahmed.hassan@example.com",
                "age": 41,
                "isMarried": true,
                "nationality": "Egyptian"
            },
            {
                "name": "Yuki Tanaka",
                "email": "yuki.tanaka@example.com",
                "age": 26,
                "isMarried": false,
                "nationality": "Japanese"
            },
            {
                "name": "Maria Silva",
                "email": "maria.silva@example.com",
                "age": 37,
                "isMarried": true,
                "nationality": "Brazilian"
            },
            {
                "name": "James Lee",
                "email": "james.lee@example.com",
                "age": 30,
                "isMarried": false,
                "nationality": "Australian"
            },
            {
                "name": "Fatima Ali",
                "email": "fatima.ali@example.com",
                "age": 33,
                "isMarried": true,
                "nationality": "Indian"
            },
            {
                "name": "Lukas Schmidt",
                "email": "lukas.schmidt@example.com",
                "age": 48,
                "isMarried": true,
                "nationality": "German"
            },
            {
                "name": "Chloe Dubois",
                "email": "chloe.dubois@example.com",
                "age": 22,
                "isMarried": false,
                "nationality": "French"
            },
            {
                "name": "Igor Petrov",
                "email": "igor.petrov@example.com",
                "age": 39,
                "isMarried": true,
                "nationality": "Russian"
            },
            {
                "name": "Amara Okafor",
                "email": "amara.okafor@example.com",
                "age": 27,
                "isMarried": false,
                "nationality": "Nigerian"
            },
            {
                "name": "Hassan Raza",
                "email": "hassan.raza@example.com",
                "age": 50,
                "isMarried": true,
                "nationality": "Bangladeshi"
            },
            {
                "name": "Elena Rossi",
                "email": "elena.rossi@example.com",
                "age": 31,
                "isMarried": false,
                "nationality": "Italian"
            },
            {
                "name": "Min-jun Kim",
                "email": "minjun.kim@example.com",
                "age": 25,
                "isMarried": false,
                "nationality": "South Korean"
            },
            {
                "name": "Olivia Nguyen",
                "email": "olivia.nguyen@example.com",
                "age": 36,
                "isMarried": true,
                "nationality": "Vietnamese"
            },
            {
                "name": "Thomas Müller",
                "email": "thomas.muller@example.com",
                "age": 43,
                "isMarried": true,
                "nationality": "Austrian"
            }
        ]
    });


}


seed().then(() => prisma.$disconnect());
















