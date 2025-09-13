import PageHead from "@/components/common/pageHead";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./dashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

// to specify the expected props for the DashboardLayout
interface PropTypes {
  children: ReactNode;
  description?: string;
  title?: string;
  type?: string;
}

// layout for Dashboard
const DashboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            isBlurred={false}
            position="static"
            classNames={{ wrapper: "p-0" }} // wrapper
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <NavbarMenuToggle
              className="lg:hidden"
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
            />
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
