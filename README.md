📦 Step 1: Install Prisma
bashcd prisma-project

# Prisma install করুন
npm install prisma @prisma/client

# Prisma initialize করুন
npx prisma init

Neon link::   https://console.neon.tech/app/projects/empty-rain-35790630?database=neondb


  // "prisma": {
  //   "seed": "ts-node prisma/seed.ts"
  // },

  --> if any update on prisma then run this command:

  npx prisma migrate dev
  then init
  or click::
  npx prisma migrate dev --name added-new-fields
  
  npx prisma generate
---> if any data vaulue on database update use the PUT method command and then run:

"Invoke-RestMethod -Uri http://localhost:3000/api -Method Put"
alert: this command run on new terminal (click + sign)

--> for delete operation : use this command on terminal:

"Invoke-RestMethod -Uri http://localhost:3000/api -Method Delete "


// if any new table make in prisma schema then run the command in terminal:

npx prisma migrate dev --name init
