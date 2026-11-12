import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().trim().toLowerCase().email("Enter a valid email address.") });

// Demo storage. On serverless this resets between cold starts —
// swap for MongoDB / Vercel KV / Supabase to persist real signups.
const emails = new Set<string>();

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  const { email } = parsed.data;
  if (emails.has(email)) return NextResponse.json({ message: "You're already on the list." });
  emails.add(email);
  return NextResponse.json({ message: "You're on the list. We'll email you at launch." }, { status: 201 });
}
