import Head from "next/head";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <Head>
        <title>Template</title>
      </Head>
      <section>
        <h1>Test</h1>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
};
