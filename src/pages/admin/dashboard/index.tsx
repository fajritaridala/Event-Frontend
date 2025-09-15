import DashboardLayout from "@/components/layouts/dashboardLayouts";
import Dashboard from "@/components/views/Admin/Dashboard";

// Register Page
const AdminDashboardPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard Admin"
      type="admin"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default AdminDashboardPage;
