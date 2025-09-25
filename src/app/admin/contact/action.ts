"use server";

import { db } from "@/db/prisma";
import { z } from "zod";

export async function createContactMessage(data: FormData) {
  const name = data.get("name") as string | null;
  const email = data.get("email") as string | null;
  const companyName = data.get("companyName") as string | null;
  const productType = data.get("productType") as string | null;
  const message = data.get("message") as string | null;

  if (!name || !email || !companyName || !productType) {
    throw new Response("All fields except message are required", { status: 400 });
  }

  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    companyName: z.string().min(2),
    productType: z.string().min(2),
    message: z.string().optional(),
  });

  const parsed = schema.safeParse({ name, email, companyName, productType, message });
  if (!parsed.success) {
    throw new Response("Validation failed", { status: 400 });
  }

  await db.contactForm.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      companyName: parsed.data.companyName,
      productType: parsed.data.productType,
      message: parsed.data.message ?? null,
    },
  });

  return; // server action must return void
}
