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

import GoTop from "../components/Layouts/GoTop";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { getMetadata } from "../config/metadata";

export default function App({ Component, pageProps }) {
  const page = "home";
  const { title, description } = getMetadata(page);
  React.useEffect(() => {
    AOS.init();
    // Load Facebook Pixel script dynamically
    const loadFbPixelScript = () => {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", process.env.FACEBOOK_PIXEL_ID || 531325788993265);
      fbq("track", "PageView");
    };
    loadFbPixelScript();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>

        <Component {...pageProps} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="15.50" />
      </ChakraProvider>
    </>
  );
}
