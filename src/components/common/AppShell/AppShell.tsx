import { ReactNode, useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import Toaster from "@/components/ui/Toaster";
import { ToasterContext, defaultToaster } from "@/contexts/ToasterContext";
import { cn } from "@/utils/class.name";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface PropTypes {
  children: ReactNode;
}

const AppShell = (props: PropTypes) => {
  const { children } = props;
  const { toaster, setToaster } = useContext(ToasterContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToaster(defaultToaster);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [toaster]);
  return (
    <main className={cn(inter.className)}>
      {children}
      {toaster.type !== "" && (
        <Toaster type={toaster.type} message={toaster.message} />
      )}
    </main>
  );
};

export default AppShell;
