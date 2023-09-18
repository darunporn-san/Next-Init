import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";

interface Props {
  // menu: string;
  // routeList: Array<any>;
}

const { Sider } = Layout;
const { SubMenu } = Menu;

const items2: any["items"] = [
  "UserOutlined",
  "LaptopOutlined",
  "NotificationOutlined",
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Sidebar: NextPage<Props> = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={200}
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="bg-white"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;
