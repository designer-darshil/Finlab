"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

type TransactionType = "Subscribe" | "Receive" | "Transfer";

type Payment = {
  id: string;
  amount: number;
  status: "accepted" | "pending" | "rejected";
  backgroundColor: string;
  email: string;
  invoiceNumber: string;
  transactiontype: TransactionType; // Add this line to your Payment type
};
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    accessorKey: "namebusiness",
    header: "Name/ Business",
  },
  {
    accessorKey: "transactiontype",
    header: "Transaction Type",
    cell: ({
      row,
    }: {
      row: { getValue: (key: string) => TransactionType };
    }) => {
      const transactionType: TransactionType = row.getValue("transactiontype");

      // Directly using transactionType since it is properly typed
      return <div className="font-bold">{transactionType}</div>;
    },
  },
  {
    accessorKey: "datetime",
    header: "Date & Time",
    cell: () => {
      return (
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-secondary-500 font-bold">October 20 , 2022</h4>
          <p className="text-secondary-300 text-sm">01:32 PM</p>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-bold">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => {
      return (
        <div className="flex items-center gap-3">
          <button className="p-2">
            <i className="ri-eye-fill text-secondary-300 text-lg"></i>
          </button>
          <button className="p-2">
            <i className="ri-delete-bin-3-fill text-secondary-300 text-lg"></i>
          </button>
        </div>
      );
    },
  },
];
