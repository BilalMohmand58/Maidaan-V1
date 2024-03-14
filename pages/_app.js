import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Maidaan - Simplifying Real Estate</title>
        </Head>

        <Component {...pageProps} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="15.50" />
      </ChakraProvider>
    </>
  );
}
