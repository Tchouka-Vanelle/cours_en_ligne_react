//est notre fichier principale car il contient le composant principale(mére)
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
// import Waves from "../components/sections/Waves";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import TutorialSection from "../components/sections/TutorialSection";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <ShowcaseSection />
      <TutorialSection/>
    </Layout>
  )
}

export default IndexPage;
