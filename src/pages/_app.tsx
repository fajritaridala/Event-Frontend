import "@/styles/globals.css";
import { className } from "@/utils/class.name";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={className(
        inter.className,
        "flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0",
      )}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
