import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AppProps } from "next/app";
import Head from "next/head";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/text-editor.css";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>The Swarm Corporation</title>
        <link href="/favicon.svg" rel="icon" type="image/svg" />
      </Head>
      <TooltipProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </TooltipProvider>
    </>
  );
}
