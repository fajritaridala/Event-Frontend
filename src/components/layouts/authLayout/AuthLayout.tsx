import PageHead from "@/components/commons/pageHead";
import { ReactNode } from "react";

interface PropType {
  title?: string;
  children: ReactNode;
}

const AuthLayout = (props: PropType) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
