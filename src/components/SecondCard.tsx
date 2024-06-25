import { useState, useEffect } from "react";
import cardItems from "../datas/otherFlavours.json";

const SecondCart = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlide = (i: number) => {
    setCurrentIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex == cardItems.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-[310px] h-[170px] bg-black rounded-lg  overflow-hidden relative ">
      <img
        src={cardItems[currentIndex].src}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-1 left-3 flex gap-1">
        {cardItems.map((_card, index) => {
          if (currentIndex === index) {
            return (
              <div
                className="w-5 h-[6px] border-[0.9px] bg-yellow-400 rounded-md cursor-pointer border-none duration-200"
                key={Math.random()}
                onClick={() => {
                  handleSlide(index);
                }}
              ></div>
            );
          }
          return (
            <div
              className="w-3 h-[6px] border-[0.9px] bg-yellow-100 rounded-md cursor-pointer border-yellow-200 "
              key={Math.random()}
              onClick={() => {
                handleSlide(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondCart;
