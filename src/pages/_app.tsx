import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import { ConfigProvider, Spin } from "antd";
import { NextIntlClientProvider } from "next-intl";

const DynamicLayout = dynamic(() => import("@/components/layout"), {
  ssr: false,
  loading: () => <Spin></Spin>,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Kanit,sans-serif",
          // colorPrimary: '#5CB3C1',
        },
      }}
    >
      <NextIntlClientProvider messages={pageProps.messages}>
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </NextIntlClientProvider>
    </ConfigProvider>
  );
};

export default App;
