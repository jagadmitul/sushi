import dynamic from "next/dynamic";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Projects />
      <Mouse />
    </Layout>
  );
};
export default Index;
