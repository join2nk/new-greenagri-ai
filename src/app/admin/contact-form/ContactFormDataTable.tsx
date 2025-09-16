"use client"

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


import type { ContactFormSubmission } from "../../../../prisma/generated/prisma"
import { Trash } from "lucide-react"

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
        cell: info => (
          <div className="max-w-[28rem] truncate" title={String(info.getValue())}>
            {String(info.getValue())}
          </div>
        ),
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
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                const id = row.original.id
                if (!onDelete) return
                void onDelete(id)
              }}
              
            >
              <Trash className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        ),
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
