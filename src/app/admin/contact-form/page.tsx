"use server";
import React from "react";
import { db } from "@/db/prisma";
import { deleteContactMessage} from "../contact/action"; // server action we created

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default async function ContactFormEntriesPage() {
  const data = await db.contactForm.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <Table>
      <TableCaption>List of messages from the Contact Form</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          <TableHead className="w-[200px]">Email</TableHead>
          <TableHead className="w-[200px]">Company</TableHead>
          <TableHead className="w-[150px]">Product Type</TableHead>
          <TableHead className="w-[300px]">Message</TableHead>
          <TableHead className="text-right w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.companyName}</TableCell>
            <TableCell>{item.productType}</TableCell>
            <TableCell className="max-w-[300px] truncate" title={item.message ?? ""}>
              {item.message ?? "-"}
            </TableCell>
            <TableCell className="text-right">
              <AlertDialog>
                <AlertDialogTrigger className="text-red-500 hover:underline text-sm">
                  Delete
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the contact form submission.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={deleteContactMessage}>
                      <input type="hidden" name="id" value={item.id} />
                      <AlertDialogAction type="submit">
                        Yes, delete
                      </AlertDialogAction>
                    </form>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
