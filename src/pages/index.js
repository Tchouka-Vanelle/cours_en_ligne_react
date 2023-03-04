//est notre fichier principale car il contient le composant principale(mére)
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
// import Waves from "../components/sections/Waves";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import TutorialSection from "../components/sections/TutorialSection";
import CertificateSection from "../components/sections/CertificateSection";
import DiscountSection from "../components/sections/DiscountSection";
import Testimonial from "../components/sections/Testimonial";
import Logos from "../components/sections/Logos";
import After_Logos from "../components/sections/After_Logos";
import Instruction_Card from "../components/sections/Instruction_Card";
import After_Instruction_Card from "../components/sections/After_Instruction_Card";
import Offers from "../components/sections/Offers";
import Footer from "../components/sections/Footer";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <ShowcaseSection />
      <TutorialSection />
      <CertificateSection />
      <DiscountSection />
      <Testimonial />
      <Logos/>
      <After_Logos/>
      <Instruction_Card/>
      <After_Instruction_Card/>
      <Offers/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage;
