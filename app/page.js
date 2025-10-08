"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/ui/navbar";
import HeroShowcase from "./components/home/heroShowcase";
import HeroShowcaseMd from "./components/home/heroShowcaseMd";
import EventExplorer from "./components/home/eventExplorer";
import AllEventSection from "./components/home/allEventSection";
import Footer from "./components/ui/footer";

export default function Home() {
  // Initialize with the workshop filter (first item in eventCategories)
  const [selectedFilter, setSelectedFilter] = useState({
    id: 1,
    title: "WORKSHOPS",
    icon: "/images/workshopicon.jpg",
  });

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <Navbar />
      <div className="">
      <HeroShowcaseMd className=""/>
      <HeroShowcase className="block md:hidden"/>
      <EventExplorer onFilterSelect={handleFilterSelect} selectedFilter={selectedFilter}/>
      <AllEventSection selectedFilter={selectedFilter}/>
      </div>
      <Footer/>
    </div>
  );
}
