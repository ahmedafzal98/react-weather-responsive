import React from 'react'
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

function Home() {
    return (
        <>
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
        </>
    )
}

export default Home
