import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslations } from "next-intl";
import Section from "@/components/sections/dashboard";

const Dashboard = () => {
  const t = useTranslations("Dashboard");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <>
      <Head>
        <title> {t("title", { locale: otherLocale })}</title>
      </Head>
      <Section />
    </>
  );
};

export default Dashboard;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
