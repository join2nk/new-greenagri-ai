"use server";

import { db } from "@/db/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createContactMessage(initialData:unknown,data: FormData) {
  const name = data.get("name") as string | null;
  const email = data.get("email") as string | null;
  const companyName = data.get("companyName") as string | null;
  const productType = data.get("productType") as string | null;
  const message = data.get("message") as string | null;

  if (!name || !email || !companyName || !productType) {
    return { success: false, error: "All fields except message are required" };
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
    return { success: false, error: parsed.error.issues.map((e) => e.message).join(", ") };
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

  return { success: true };
}


// DELETE action

export async function deleteContactMessage(formData: FormData) {
  const idStr = formData.get("id") as string | null;

  if (!idStr) {
    throw new Response("ID is required", { status: 400 });
  }

  // Convert string to number
  const id = Number(idStr);
  if (isNaN(id)) {
    throw new Response("Invalid ID", { status: 400 });
  }

  await db.contactForm.delete({
    where: { id }, // now 'id' is a number as expected
  });

    return redirect("/admin/contact-form");// server action must return void
}
