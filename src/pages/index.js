//est notre fichier principale car il contient le composant principale(mére)
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import Mockup from "../components/sections/Mockup";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
