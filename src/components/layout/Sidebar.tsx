import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { SidebarMenu } from "./sidebar-config";

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
      {SidebarMenu?.map((menu: any, i) => {
        return (
          <div key={menu.key}>
            {menu?.title !== "" && (
              <div className="mx-1">
                <p className="text-gray-600 text-start px-2">{menu.title}</p>
                <hr className="pt-[1px] bg-secondary my-1"/>
              </div>
            )} 
            <Menu
              onClick={({ key }) => {
                window.scrollTo(0, 0);
              }}
              mode="inline"
              items={menu.menu}
            />
          </div>
        );
      })}
    </Sider>
  );
};

export default Sidebar;
