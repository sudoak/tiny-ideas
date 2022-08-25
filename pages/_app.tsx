/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8XLLMKN8B7"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8XLLMKN8B7');`}
      </Script>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
