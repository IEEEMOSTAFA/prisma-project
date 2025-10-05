// ✅ src/app/api/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // <-- Correct import
const prisma = new PrismaClient();
export async function GET() {
   const users = await prisma.user.findFirst();
  return NextResponse.json(users);
}

// Access: http://localhost:3000/api