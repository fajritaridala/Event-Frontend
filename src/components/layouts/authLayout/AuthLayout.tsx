import PageHead from "@/components/commons/pageHead";
import { Fragment, ReactNode } from "react";

// Prop types
interface PropType {
  children: ReactNode;
  title?: string;
}

// AuthLayout component
const AuthLayout = (props: PropType) => {
  const { title, children } = props;
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
