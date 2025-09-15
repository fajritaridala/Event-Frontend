import DashboardLayout from "@/components/layouts/dashboardLayouts";
import Category from "@/components/views/Admin/Category";
// Register Page
const AdminCategoryPage = () => {
  return (
    <DashboardLayout
      title="Category"
      description="List of all categories, create new categories, and manage existing categories"
      type="admin"
    >
      <Category />
    </DashboardLayout>
  );
};

export default AdminCategoryPage;
