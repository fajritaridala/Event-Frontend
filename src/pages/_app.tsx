import "@/styles/globals.css";
import { cn } from "@/utils/class.name";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Create a client for react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <main
            className={cn(
              inter.className,
              "flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0",
            )}
          >
            <Component {...pageProps} />
          </main>
        </NextUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
