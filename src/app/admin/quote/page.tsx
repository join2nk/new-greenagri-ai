import QuoteFormEntriesPage from "@/components/landing/QuoteFormEntriesPage ";
import { db } from "@/db/prisma";

export default async function Page() {
  const data = await db.quoteformdetails.findMany({});
  return <QuoteFormEntriesPage data={data} />;
}
