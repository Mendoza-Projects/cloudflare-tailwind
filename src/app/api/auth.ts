import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  try {
    // Cloudflare JWT Verification (optional: call an endpoint if needed)
    const user = { username: "User", profileImage: "/default-avatar.png" }; // Mock user
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json({ user: null }, { status: 401 });
  }
}

