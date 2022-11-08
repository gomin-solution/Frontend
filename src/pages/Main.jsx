import React from "react";
import Advice from "../components/choiceAndAdvice/Advice";
import Choice from "../components/choiceAndAdvice/Choice";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import Banner from "../components/main/Banner";
import Logo from "../components/main/Logo";

function Main() {
  return (
    <Layout>
      <Logo />
      <Banner />
      <Choice />
      <Advice />
      <Footer />
    </Layout>
  );
}

export default Main;
