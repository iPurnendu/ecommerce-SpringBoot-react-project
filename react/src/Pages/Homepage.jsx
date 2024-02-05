import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { apple } from "../Data/Phone/apple";
import { dell } from "../Data/Laptop/dell";
import { ssd } from "../Data/ssd";
import { watch } from "../Data/watch";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={apple} section={"Phones"} />
        <HomeProductSection data={dell} section={"Laptops and accessories"} />
        <HomeProductSection data={ssd} section={"Cumputer accessories"} />
        <HomeProductSection data={watch} section={"Watches"} />

      </div>

      
    </div>
  );
};

export default Homepage;
