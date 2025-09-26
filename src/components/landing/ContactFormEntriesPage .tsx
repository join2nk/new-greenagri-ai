"use client";

import React, { useState, useMemo } from "react";
import { deleteContactMessage } from "@/app/admin/contact/action" // server action

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactFormEntriesPage({ data }: { data: any[] }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5; // Rows per page

  // 🔍 Filter + Search
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      [item.name, item.email, item.companyName, item.productType, item.message]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="p-6 space-y-6">
      {/* Search bar */}
      <div className="flex items-center justify-between gap-4">
        <Input
          placeholder="Search by name, email, company, or product..."
          value={search}
          onChange={(e) => {
            setPage(1); // reset when searching
            setSearch(e.target.value);
          }}
          className="max-w-md"
        />
        <div className="text-sm text-gray-500">
          Showing {paginatedData.length} of {filteredData.length} results
        </div>
      </div>

      {/* Table */}
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
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.companyName}</TableCell>
                <TableCell>{item.productType}</TableCell>
                <TableCell
                  className="max-w-[300px] truncate"
                  title={item.message ?? ""}
                >
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
                          This action cannot be undone. It will permanently delete
                          this contact form submission.
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
