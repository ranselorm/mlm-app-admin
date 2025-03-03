import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const transactions = [
  {
    description: "Spotify Subscription",
    id: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: -2500,
  },
  {
    description: "Freepik Sales",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: 750,
  },
  {
    description: "Mobile Service",
    id: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: -150,
  },
  {
    description: "Wilson",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03:29 PM",
    amount: -1050,
  },
  {
    description: "Emilly",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10:40 PM",
    amount: 840,
  },
];

const TransactionsTable = () => {
  return (
    <div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Card</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Receipt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {transactions.map((tx, index) => (
              <TableRow
                key={index}
                className="cursor-pointer transition-all duration-150"
              >
                <TableCell className="flex items-center space-x-2">
                  <Icon
                    icon="mdi:arrow-down-circle-outline"
                    className="text-xl text-gray-500"
                  />
                  <span>{tx.description}</span>
                </TableCell>
                <TableCell>{tx.id}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.card}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell
                  className={tx.amount < 0 ? "text-red-500" : "text-teal-600"}
                >
                  {tx.amount < 0
                    ? `-$${Math.abs(tx.amount)}`
                    : `+$${tx.amount}`}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs font-normal border border-teal-600"
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
      </div>
      <div className="flex justify-end items-center mt-4 space-x-2">
        <Button variant="ghost" size="sm">
          Previous
        </Button>
        <Button size="sm" className="bg-teal-600 text-white">
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm">
          4
        </Button>
        <Button variant="ghost" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
};

export default TransactionsTable;
