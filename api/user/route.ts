import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    email: body.email,
    username: body.username,
    password: body.password,
  });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    email: "jaimin@gmail.com",
    username: "jaimin",
  });
}
