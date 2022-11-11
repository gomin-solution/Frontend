import React from "react";
import Layout from "../components/layout/Layout";
import { Header4 } from "../components/header/Header";
import Banner from "../components/main/Banner";
import Choice from "../components/choiceAndAdvice/Choice";
import Advice from "../components/choiceAndAdvice/Advice";
import Footer from "../components/footer/Footer";

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
