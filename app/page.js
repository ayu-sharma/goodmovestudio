"use client";
import React from "react";
import Navbar from "./components/ui/navbar";
import HeroShowcase from "./components/home/heroShowcase";
import HeroShowcaseMd from "./components/home/heroShowcaseMd";
import WorkshopSection from "./components/home/workshopSection";
import RegularSection from "./components/home/regularSection";
import LoadingComponent from "./components/ui/loadingComponent";
import Footer from "./components/ui/footer";
import { useData } from "./context/DataContext";

export default function Home() {
  const { classes, workshops, loading, error, formatDate } = useData();

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="">
      <div className="relative mb-12">
        <HeroShowcaseMd className="" />
        {/* <HeroShowcase className="block md:hidden" /> */}
        <div className="absolute top-0 right-0 md:left-0 -left-6 z-30 bg-gradient-to-b from-transparent via-black/10 to-transparent">
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-12">
        <WorkshopSection workshops={workshops} formatDate={formatDate} />
        <RegularSection regularClasses={classes} formatDate={formatDate} />
      </div>
      <Footer />
    </div>
  );
}
