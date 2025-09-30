// app/(su)/admin/quote-form/action.ts
"use server";

import { db } from "@/db/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

// Delete action
export async function deleteMessage(data: FormData) {
  const idString = data.get("id") as string | null;

  if (!idString) {
    throw new Response("Invalid ID", { status: 403 });
  }

  const id = z.coerce.number().safeParse(idString);
  if (!id.success) {
    throw new Response("Invalid ID", { status: 403 });
  }

  await db.quoteformdetails.delete({
    where: { id: id.data },
  });
                                   
  return redirect("/admin/quote");
}

// Create action (to store data)


export async function createMessage(data: FormData) {
  const name = data.get("name") as string | null;
  const email = data.get("email") as string | null;
  const message = data.get("message") as string | null;
  const phone = data.get("phone") as string | null; // <-- added

  if (!name || !email) {
    throw new Response("Name and Email are required", { status: 400 });
  }

  // Validate using zod
  const schema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().optional(),
    phone: z.string().optional(), // <-- added phone validation
  });

  const parsed = schema.safeParse({ name, email, message,phone });
  if (!parsed.success) {
    throw new Response("Validation failed", { status: 400 });
  }

  await db.quoteformdetails.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message ?? null,
      phone: parsed.data.phone ?? null, // <-- store phone
    },
  });

  return; // server actions must return void
}

 // or wherever you want after form submit
