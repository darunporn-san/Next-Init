import Head from "next/head";
import { Layout } from "antd";
import { GetServerSideProps } from "next";
import HeaderContainer from "./Header";
import Sidebar from "./Sidebar";

const { Header, Content, Sider } = Layout;

export const siteTitle = "Next.js Sample Website";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <HeaderContainer />
      <Layout className="py-3 gap-3">
        <Sidebar />
        <Layout>
          <main className="bg-white h-full">{children}</main>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
