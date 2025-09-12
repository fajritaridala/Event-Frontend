import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import PageHead from "@/components/common/pageHead";
import { useRouter } from "next/router";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

// Home Page
export default function Home() {
  const router = useRouter();
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <PageHead title="Home page"/>
      <Button color="primary" onClick={() => router.push("/auth/register")}>Button</Button>
    </main>
  );
}