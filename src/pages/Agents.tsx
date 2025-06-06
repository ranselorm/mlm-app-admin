import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserFilter from "@/components/UserFilter";
import UsersTable from "@/components/UsersTable";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useInvite } from "@/hooks/useInvite";
import { useInvitedUsers } from "@/hooks/useInvitedUsers";
import InvitedUsersTable from "@/components/InvitedUsersTable";

const Agents = () => {
  const [phone, setPhone] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("current");

  const inviteMutation = useInvite();
  // const { data: invitedUsers, isLoading: loadingInvitedUsers } =
  //   useInvitedUsers();

  const handleInvite = () => {
    if (!phone) return;

    inviteMutation.mutate(
      { phone },
      {
        onSuccess: () => {
          toast.success("Invitation sent successfully!", {
            duration: 3000,
          });
          setTimeout(() => setIsDialogOpen(false), 500);
        },
        onError: (error) => {
          console.error("Error sending invite:", error);
          toast.error("Failed to send invite. Try again.");
        },
      }
    );
  };

  return (
    // <div className="p-4">
    //   <div className="container mx-auto">
    //     <div className="flex justify-between items-center">
    //       <div className="flex space-x-4 border-b">
    //         <button
    //           className={`px-4 py-2 cursor-pointer ${
    //             activeTab === "current"
    //               ? "border-b-2 border-main "
    //               : "text-gray-500"
    //           }`}
    //           onClick={() => setActiveTab("current")}
    //         >
    //           Current Users
    //         </button>
    //         <button
    //           className={`px-4 py-2 cursor-pointer ${
    //             activeTab === "invited"
    //               ? "border-b-2 border-main"
    //               : "text-gray-500"
    //           }`}
    //           onClick={() => setActiveTab("invited")}
    //         >
    //           Invited Users
    //         </button>
    //       </div>
    //       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    //         <DialogTrigger asChild>
    //           <Button className="cursor-pointer bg-main text-white flex items-center gap-x-2 rounded-md hover:bg-teal-700 transition">
    //             <Icon icon="material-symbols:add-rounded" />
    //             Invite user
    //           </Button>
    //         </DialogTrigger>
    //         <DialogContent className="p-6 max-w-sm">
    //           <DialogTitle>Invite a User</DialogTitle>
    //           <p className="text-sm text-gray-500">
    //             Enter the user's phone number below:
    //           </p>

    //           <Input
    //             type="tel"
    //             placeholder="+233 55 123 4567"
    //             value={phone}
    //             onChange={(e) => setPhone(e.target.value)}
    //             className="mt-3 focus-visible:ring-0"
    //           />

    //           <DialogFooter>
    //             <Button
    //               onClick={handleInvite}
    //               disabled={!phone || inviteMutation.isPending}
    //               className="bg-main cursor-pointer hover:bg-teal-700 text-white mt-4"
    //             >
    //               {inviteMutation.isPending
    //                 ? "Please wait..."
    //                 : "Send Invitation"}
    //             </Button>
    //           </DialogFooter>
    //         </DialogContent>
    //       </Dialog>
    //     </div>

    //     {activeTab === "current" ? (
    //       <div className="mt-5">
    //         <UserFilter />
    //         <UsersTable />
    //       </div>
    //     ) : (
    //       <div className="mt-5">
    //         {loadingInvitedUsers ? (
    //           <p>Loading invited users...</p>
    //         ) : (
    //           <InvitedUsersTable invitedUsers={invitedUsers ?? []} />
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="p-4">Agents</div>
  );
};

export default Agents;
