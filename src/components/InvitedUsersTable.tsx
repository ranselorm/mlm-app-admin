import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns"; // ✅ For date formatting

interface InvitedUser {
  id: number;
  phone: string;
  status: string;
  createdAt: string;
}

interface InvitedUsersTableProps {
  invitedUsers: InvitedUser[];
}

const InvitedUsersTable = ({ invitedUsers }: InvitedUsersTableProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto">
      <Table className="min-w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left py-2 px-4">Phone</TableHead>
            <TableHead className="text-left py-2 px-4">Date</TableHead>
            <TableHead className="text-left py-2 px-4">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invitedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="py-2 px-4">{user.phone}</TableCell>
              <TableCell className="py-2 px-4">
                {format(new Date(user.createdAt), "MMM dd, yyyy hh:mm a")}
              </TableCell>
              <TableCell className={`py-2 px-4`}>
                <p
                  className={`${
                    user?.status === "ACCEPTED"
                      ? "border-main"
                      : "border-yellow-500"
                  } rounded-full w-[40%] flex items-center justify-center px-6 py-2 text-xs border`}
                >
                  {user.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvitedUsersTable;
