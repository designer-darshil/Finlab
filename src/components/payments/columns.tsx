"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import FigmaLogo from "@/assets/FigmaLogo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
type TransactionType = "Subscribe" | "Receive" | "Transfer";

export type Payment = {
  id: string;
  amount: number;
  status: "accepted" | "pending" | "rejected";
  backgroundColor: string;
  email: string;
  invoiceNumber: string;
  transactiontype: TransactionType;
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
    cell: () => {
      return (
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center">
            <img src={FigmaLogo} alt="" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h4 className="text-secondary-500 font-bold">Figma Pro</h4>
            <p className="text-secondary-300 text-sm">Software</p>
          </div>
        </div>
      );
    },
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
      return (
        // <div className="font-bold bg-secondary-200">{transactionType}</div>
        <div className="font-bold bg-secondary-100 text-secondary-400 rounded-md inline py-1 px-2">
          Subscribe
        </div>
      );
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
          <Dialog>
            <DialogTrigger>
              <button className="p-2">
                <i className="ri-delete-bin-3-fill text-secondary-300 text-lg"></i>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription className="text-center">
                  <div className="w-20 h-20 bg-error-500 rounded-full mx-auto flex items-center justify-center mb-6 drop-shadow-[0_30px_30px_rgba(198,84,104,0.40)]">
                    <i className="ri-delete-bin-3-fill text-white text-3xl"></i>
                  </div>
                  <div className="mb-6">
                    <h6 className="font-extrabold text-secondary-500 text-2xl mb-3">
                      Delete Transaction ?
                    </h6>
                    <p>
                      Are you sure you want to delete this transaction history?
                    </p>
                  </div>
                </DialogDescription>
                <DialogFooter className="flex items-center justify-center gap-3">
                  <button className="border border-secondary-300 text-secondary-500 w-full p-3 rounded-lg">
                    Cancel
                  </button>
                  <button className="bg-primary text-white w-full p-3 rounded-lg">
                    Yes
                  </button>
                </DialogFooter>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];