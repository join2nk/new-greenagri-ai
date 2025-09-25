"use client"

/*
todo::
*/
import * as React from "react"
import { useState, useMemo } from "react"
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, useReactTable, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Eye, Trash } from "lucide-react"
import { cn } from "@/lib/utils"


import type { ContactFormSubmission } from "../../../../prisma/generated/prisma"

type Props = {
  data: ContactFormSubmission[]
  onDelete?: (id: string) => Promise<void> | void
}

export default function ContactFormDataTable({ data, onDelete }: Props) {
  const [globalFilter, setGlobalFilter] = useState("")

  const columns = useMemo<ColumnDef<ContactFormSubmission, any>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: info => info.getValue(),
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: info => info.getValue(),
      },
      {
        accessorKey: "subject",
        header: "Subject",
        cell: info => info.getValue() ?? "-",
      },
      {
        accessorKey: "message",
        header: "Message",
        cell: info => {
          const v = String(info.getValue() ?? "")
          const truncated = v.length > 20 ? v.slice(0, 20) + "..." : v
          return (
            <div className="max-w-[28rem]">
              <div className="truncate" title={v}>
                {truncated}
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: "createdAt",
        header: "Submitted",
        cell: info => {
          const v = info.getValue() as string
          try {
            const d = new Date(v)
            return d.toLocaleString()
          } catch {
            return v
          }
        },
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const message = String(row.original.message ?? "")
          const [openView, setOpenView] = React.useState(false)
          const [openConfirm, setOpenConfirm] = React.useState(false)

          return (
            <div className="flex gap-2">
              {/* View full message */}
              <Button size="sm" variant="ghost" onClick={() => setOpenView(true)}>
                <Eye className="h-4 w-4" />
              </Button>

              {/* Delete with confirmation dialog */}
              <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <Trash className="h-4 w-4 text-red-600" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete submission?</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete the submission from <span className="font-medium">{row.original.name}</span>? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                      variant="destructive"
                      onClick={async () => {
                        const id = row.original.id
                        setOpenConfirm(false)
                        if (!onDelete) return
                        await onDelete(id)
                      }}
                    >
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* View message dialog (separate) */}
              <Dialog open={openView} onOpenChange={setOpenView}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Message from {row.original.name}</DialogTitle>
                    <DialogDescription className="whitespace-pre-wrap">
                      {message}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )
        },
      },
    ],
    [onDelete]
  )

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const search = String(filterValue).toLowerCase()
      for (const col of ["name", "email", "subject", "message"]) {
        const val = String(row.getValue(col) ?? "").toLowerCase()
        if (val.includes(search)) return true
      }
      return false
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search submissions..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-muted-foreground text-sm">
            {table.getRowModel().rows.length} results
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage() && table.getState().pagination.pageIndex === 0}
            >
              Prev
            </Button>
            <div className="px-2">{table.getState().pagination.pageIndex + 1}</div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer select-none"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                  {{ asc: " 🔼", desc: " 🔽" }[String(header.column.getIsSorted() as any)] ?? null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No submissions found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHead colSpan={columns.length}>
              <TableCaption>
                Showing {table.getRowModel().rows.length} of {data.length} submissions
              </TableCaption>
            </TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
