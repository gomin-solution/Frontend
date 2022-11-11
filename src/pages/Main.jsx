import React from "react";
import Layout from "../components/layout/Layout";
import { Header4 } from "../components/header/Header";
import Banner from "../components/main/Banner";
import Footer from "../components/footer/Footer";
import Choice from "../components/choiceAndAdvice/Choice";
import Advice from "../components/choiceAndAdvice/Advice";

function Main() {
  return (
    <Layout>
      <Header4 />
      <Banner />
      <Choice />
      <Advice />
      <Footer />
    </Layout>
  );
}

export default Main;
