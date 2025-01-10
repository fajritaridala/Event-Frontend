import PageHead from "@/components/commons/pageHead";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./dashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";

// to specify the expected props for the DashboardLayout
interface PropTypes {
  children: ReactNode;
  title?: string;
  type?: string;
}

// layout for Dashboard
const DashboardLayout = (props: PropTypes) => {
  const { children, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
