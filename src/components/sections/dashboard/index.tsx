import { NextPage, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslations } from "next-intl";
import Section from "@/components/sections/dashboard";

interface Props {}

const Dashboard: NextPage<Props> = () => {
  const t = useTranslations("Dashboard");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <>
      <p> {t("title", { locale: otherLocale })}</p>
    </>
  );
};

export default Dashboard;
