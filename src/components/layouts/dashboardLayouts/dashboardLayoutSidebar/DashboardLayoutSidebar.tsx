import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItem[];
  isOpen: boolean;
}

// layout for Sidebar
const DashboardLayoutSidebar = (props: PropTypes) => {
  const { sidebarItems, isOpen } = props; // takes sidebar items and isOpen from props
  return (
    <div className="relative z-50 flex h-screen w-full max-w-[300px] flex-col justify-between border-r-1 border-default-200 bg-white px-4 py-6 transition-all ">
      <div>sidebar</div>
      <div className="flex items-center p-1">
        <Button color="danger" fullWidth variant="light" className="flex justify-start rounded-lg px-2 py-1.5" size="lg" onClick={() => signOut()}>
          <CiLogout /> Logout
        </Button>
      </div>

    </div>
  );
};

export default DashboardLayoutSidebar;
