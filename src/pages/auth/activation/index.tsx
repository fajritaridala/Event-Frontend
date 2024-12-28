import AuthLayout from "@/components/layouts/authLayout";
import Activation from "@/components/views/Auth/Activation/Activation";
import authServices from "@/services/auth.service";

interface PropType {
  status: "success" | "failed";
}

const ActivationPage = (props: PropType) => {
  return (
    <AuthLayout title="Acara | Activation">
      <Activation {...props} />
    </AuthLayout>
  );
};

// This function gets called at build time
export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: context.query.code });

    /**
     * @param result.data.data - Check if the data is exist or not from the response
     * @param props - props is an object that contains the initial 'props' that will be received by the page component
     */
    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      }
    }
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}

export default ActivationPage;