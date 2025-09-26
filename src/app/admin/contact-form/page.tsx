import ContactFormEntriesPage from "@/components/landing/ContactFormEntriesPage ";
import { db } from "@/db/prisma";

export default async function Page() {
  const data = await db.contactForm.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ContactFormEntriesPage data={data} />;
}
