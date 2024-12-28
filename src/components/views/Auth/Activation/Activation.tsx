import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface PropType {
  status: "success" | "failed";
}

const Activation = (props: PropType) => {
  const router = useRouter();
  const { status } = props;
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src={status === "success" ? "/images/illustration/success.svg" : "/images/illustration/pending.svg"}
          alt="success illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger-500">
          {status === "success" ? "Activation Success" : "Activation Failed"}
        </h1>
        <p className="text-xl font-bold text-default-500">
          {status === "success" ? "Thank you for register account in Acara" : "Confirmation code is invalid"}
        </p>
        <Button
          className="mt-4 w-fit"
          variant="bordered"
          color="danger"
          onClick={() => router.push("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default Activation;