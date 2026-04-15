import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import Loading from "../components/Loading/Loading";
import { AuthProvider } from "../Context/AuthProvider";
import { DataProvider, useData } from "../Context/DataProvider";
import { GlobalProvider } from "../Context/GlobalProvider";
import { ThemeProvider } from "../Context/ThemeProvider";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setLoading(true);
    setPercent(100);
    const onPageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  if (loading) {
    return <Loading percent={percent} />;
  }
  return (
    <AuthProvider>
      <ThemeProvider>
        <DataProvider>
          <GlobalProvider>
            <NextNProgress />
            <Component {...pageProps} />
          </GlobalProvider>
        </DataProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
