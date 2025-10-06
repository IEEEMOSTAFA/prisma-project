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


