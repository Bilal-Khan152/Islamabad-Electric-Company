import React from "react";
import Navbar from "../components/Navbar";
import MiniCard from "../components/MiniCard";
import AvailbleJobsSection from "../components/AvailbleJobsSection";
import Poster from "../components/Poster";
import ExecutiveSummary from "../components/ExecutiveSummary";
import IESCOStrategicVision from "../components/IESCOStrategicVision";
import Policies from "../components/Policies";
import SafetyManual from "../components/SafetyManual";
import ConsumerServiceManual from "../components/ConsumerServiceManual";
import UseFulLinks from "../components/UseFulLinks";
import BannersImges from "../components/Banners";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <MiniCard />
      <div className="flex flex-col w-full items-center justify-center">
        <div className=" w-[80%]     ">
          <ExecutiveSummary />
          <IESCOStrategicVision />

          <div className="flex gap-6  lg:flex-row flex-col    justify-center">
            <div className="lg:w-[32%]  w-full">
              <Policies />
            </div>

            <div className="lg:w-[32%]  w-full">
              <ConsumerServiceManual />
            </div>

            <div className="lg:w-[32%]   w-full">
              <SafetyManual />
            </div>
          </div>
          <AvailbleJobsSection />

          <div className="w-[100%] gap-12  md:flex-row flex-col mt-8 justify-center items-center flex flex-wrap">
            <UseFulLinks />
            <Poster />
          </div>
        </div>

        <div className="w-[80%] mx-auto     mt-14">
          <BannersImges />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
