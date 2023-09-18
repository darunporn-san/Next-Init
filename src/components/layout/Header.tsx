import { NextPage, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button, Menu, Layout } from "antd";

import type { MenuProps } from "antd";

const { Header } = Layout;

interface Props {
  // menu: string;
  // setMenu: any;
  // routeList: Array<any>;
}

const HeaderContainer: NextPage<Props> = () => {
  const menuList: any["items"] = [
    { key: "/", label: "Home" },
    { key: "/dashboard", label: "Dashboard" },
    { key: "/page3", label: "Page 3" },
  ];

  const router = useRouter();

  const t = useTranslations("LocaleSwitcher");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <Header
      style={{
        background: "#fff",
        height: 70,
        padding: "0px 9px",
        display: "flex",
      }}
    >
      <div>Logo</div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menuList}
        className="w-full"
        onClick={onClick}
      />

      <div className="mr-6">
        <Link href={route} locale={otherLocale}>
          {t("switchLocale", { locale: otherLocale })}
        </Link>
      </div>
      <div className="flex items-center">
        <p className="mr-2">test@test.com</p>
        <Button type="primary" danger size="small">
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default HeaderContainer;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
