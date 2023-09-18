import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import { Spin } from "antd";
import { NextIntlClientProvider } from "next-intl";

const DynamicLayout = dynamic(() => import("@/components/layout"), {
  ssr: false,
  loading: () => <Spin></Spin>,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
    </NextIntlClientProvider>
  );
};

export default App;
