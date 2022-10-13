import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import MainSection from "../MainSection";
import Slider from "../Slider";
import Apicall from "../Apicall";
import Orangebg from "../Orangebg";
import SectionContent from "../SectionContent";
import GreySection from "../GreySection";
import HistoricalData from "../HistoricalData";
import CurrentData from "../CurrentData";
import Product from "../Product";
import Agriculture from "../Agriculture";
import Forecast from "../Forecast";
import OrangeSide from "../OrangeSide";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainSection />
      <Slider />
      <Apicall />
      <Orangebg />
      <SectionContent />
      <GreySection />
      <HistoricalData />
      <CurrentData />
      <Product />
      <Agriculture />
      <Forecast />
      {/* <OrangeSide /> */}
      <Footer />
    </>
  );
}

export default Home;
