import cardItems from "../datas/card-information.json";

interface propTypes {
  handleSlide: (i: number) => void;
  currentIndex: number;
}

const FirstCard = ({ handleSlide, currentIndex }: propTypes) => {
  return (
    <div className="w-[310px] h-[170px] bg-black rounded-lg  overflow-hidden relative">
      <img
        src={cardItems[currentIndex].src}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-1 left-3 flex gap-1">
        {cardItems.map((card, index) => {
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

export default FirstCard;
