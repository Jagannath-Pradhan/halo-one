import { NextResponse } from "next/server";

// Demo storage (temporary; use a database for production).
const emails = new Set();

export async function POST(req) {
  try {
    const body = await req.json();

    const email = body?.email?.trim().toLowerCase();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Check duplicate email
    if (emails.has(email)) {
      return NextResponse.json({
        message: "You're already on the list.",
      });
    }

    // Store email
    emails.add(email);

    return NextResponse.json(
      {
        message: "You're on the list. We'll email you at launch.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
