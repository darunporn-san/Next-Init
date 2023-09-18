import { NextPage, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Menu, Layout, Dropdown, Avatar } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import DropdownManage from "./dropdown-manage";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "@/assets/image/OBCL.svg"

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
        justifyContent:'space-between',
        borderRadius: "10px",
      }}
    >
      <Image
              width={180}
              src={Logo}
              alt=""
              height={100}
              className="my-auto"
            />

      {/* <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menuList}
        className="w-full"
        onClick={onClick}
      /> */}

      {/* <div className="mr-6">
        <Link href={route} locale={otherLocale}>
          {t("switchLocale", { locale: otherLocale })}
        </Link>
      </div> */}
      <div className="flex items-center">
        <div className="mr-2">test@test.com</div>
        <Avatar icon={<UserOutlined />} className="mr-5" />
        <Dropdown
          placement="bottomRight"
          
          dropdownRender={() => <DropdownManage />}
        >
          <EllipsisOutlined rotate={90} />
        </Dropdown>
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
