import { addPantryItem, getPantryItems } from "@/lib/store";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ items: getPantryItems() });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body?.name || !body?.quantity || !body?.expiresInDays || !body?.category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const item = addPantryItem({
    name: String(body.name),
    quantity: Number(body.quantity),
    expiresInDays: Number(body.expiresInDays),
    category: body.category,
  });

  return NextResponse.json({ item }, { status: 201 });
}
