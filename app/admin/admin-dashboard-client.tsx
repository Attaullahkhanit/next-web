"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { RowData } from "@tanstack/react-table"
import {
  type ColumnDef,
  type SortingState,
  type VisibilityState,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, LogOut, Mail, Search, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    refetch?: () => void
  }
}

const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a href={`mailto:${row.getValue("email")}`} className="text-purple-600 hover:underline text-sm">
        {row.getValue("email")}
      </a>
    ),
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => <div className="text-sm">{row.getValue("subject")}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      const message = row.getValue("message") as string
      return (
        <div className="text-sm text-gray-600 min-w-[300px] whitespace-pre-wrap py-2">
          {message}
        </div>
      )
    },
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"))
      return <div className="text-sm">{date.toLocaleDateString()}</div>
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      const message = row.original
      const { toast } = useToast()

      const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this message?")) return

        try {
          const response = await fetch(`/api/contact/${message.id}`, {
            method: "DELETE",
          })

          if (!response.ok) throw new Error("Failed to delete")

          toast({
            title: "Success",
            description: "Message deleted successfully",
          })

          table.options.meta?.refetch?.()
        } catch {
          toast({
            title: "Error",
            description: "Failed to delete message",
            variant: "destructive",
          })
        }
      }

      return (
        <Button onClick={handleDelete} size="sm" variant="destructive" className="gap-2">
          <Trash2 size={16} />
          Delete
        </Button>
      )
    },
  },
]

export default function AdminDashboardClient() {
  const router = useRouter()
  const { toast } = useToast()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = useState("")

  const {
    data: messages = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const response = await fetch("/api/contact")
      if (!response.ok) {
        if (response.status === 401) {
          router.push("/login")
          throw new Error("Unauthorized")
        }
        throw new Error("Failed to fetch messages")
      }
      return response.json()
    },
    refetchInterval: 30000,
  })

  const table = useReactTable({
    data: messages,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      refetch,
    },
  })

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100 p-6">
        <Card className="bg-red-50 border border-red-200 p-6">
          <p className="text-red-600">Error loading messages. Please try again.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100">
      {/* Header */}
      <div className="border-b border-purple-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Manage your contact messages</p>
          </div>
          <Button onClick={handleLogout} variant="destructive" className="gap-2">
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Stats Card */}
        <Card className="bg-white p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-4 rounded-lg">
              <Mail className="text-purple-600" size={28} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Messages</p>
              <p className="text-4xl font-bold text-gray-900">{messages.length}</p>
            </div>
          </div>
        </Card>

        {/* Table Card */}
        <Card className="bg-white">
          {/* Search and Filter Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center gap-4">
            <Search className="text-gray-400" size={20} />
            <Input
              placeholder="Search by name, email, or subject..."
              value={globalFilter ?? ""}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="flex-1"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Columns <ChevronDown size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Table */}
          {isLoading ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">No messages yet</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </TableHead>
                        ))}
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        // Added 'vertical-align: top' via 'align-top'
                        <TableCell key={cell.id} className="align-top">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} variant="outline">
                    Previous
                  </Button>
                  <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} variant="outline">
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
