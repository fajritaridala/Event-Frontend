import DashboardLayout from "@/components/layouts/dashboardLayouts";
import Dashboard from "@/components/views/Member/Dashboard";

// Register Page
const DashboardMemberPage = () => {
  return (
    <DashboardLayout title="Acara | Member">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
