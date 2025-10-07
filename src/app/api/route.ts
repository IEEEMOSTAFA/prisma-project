// ✅ src/app/api/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // <-- Correct import
const prisma = new PrismaClient();
// const {id, ...data} = body;

// Create OPerations
export async function GET() {
  const users = await prisma.user.findMany({
    // where: { id: { gt: 20 } },
    //  where: { isMarried: true, age: { gt: 30 } },
    // where: {
    //   OR: [{nationality: 'American'}, {age: {gte: 30}}],
    // }
    //   where: {
    //   OR: [{nationality: 'American'}],
    // },
    // where: {
    //   AND: [{nationality: 'American'}, {age: {gte: 30}}],
    // },
    // where: {
    //   nationality: {not: 'American'} ,
    // }
    where: {
      OR: [
        { nationality: 'American' },
        { nationality: 'German' },
        { nationality: 'Indian' },
        { nationality: 'Bangladeshi' },
      ],
    }
  });
  return NextResponse.json(users);
}
// Update Operations

export async function PUT(request: Request) {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: "mostafa@gmail.com"
      },
      data: {
        age: 25,
        isMarried: true
      }
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "User not found or update failed" }, { status: 404 });
  }
}

// Delete Operations
export async function DELETE(request: Request) {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        email: "john.smith@example.com"
      }
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.json({ error: "User not found or update failed" }, { status: 404 });
  }
}




















// Access: http://localhost:3000/api