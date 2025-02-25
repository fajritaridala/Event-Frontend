import DashboardLayout from "@/components/layouts/dashboardLayouts";
import Dashboard from "@/components/views/Member/Dashboard";

// Register Page
const DashboardMemberPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard member" type="member">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
