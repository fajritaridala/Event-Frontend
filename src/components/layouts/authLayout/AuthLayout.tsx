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
    <Fragment>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </Fragment>
  );
};

export default AuthLayout;
