import AuthLayout from "@/components/layouts/authLayout";
import Register from "@/components/views/Auth/Register";
import RegisterSuccess from "@/components/views/Auth/RegisterSuccess";

// Register Success Page
const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="Acara | Register Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
