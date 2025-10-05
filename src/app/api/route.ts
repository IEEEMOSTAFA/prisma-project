// ✅ src/app/api/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello World!' });
}

// Access: http://localhost:3000/api