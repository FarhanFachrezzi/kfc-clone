import cardItems from "../datas/card-information.json";
import { useEffect, useState } from "react";
import FirstCard from "./FirstCard";
import SecondCart from "./SecondCard";
import ThirdCard from "./ThirdCard";

const CardInformation = () => {
  const handleSlide = (i: number) => {
    setCurrentIndex(i);
  };
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex == cardItems.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="flex items-center w-full flex-wrap gap-5 justify-center">
      <FirstCard handleSlide={handleSlide} currentIndex={currentIndex} />
      <SecondCart />
      <ThirdCard />
    </div>
  );
};

export default CardInformation;
