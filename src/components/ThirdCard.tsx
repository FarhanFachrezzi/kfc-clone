import icon from "../../public/asset/map icon/icon.png";

const ThirdCard = () => {
  return (
    <div className="w-[310px] h-[170px] bg-sky-600 rounded-lg  overflow-hidden relative shadow-lg flex px-3">
      <h1 className="flex-1 mt-5 font-bold text-xl text-white">
        FIND A KFC <br />
        STORE<br></br> HEAR YOU{" "}
      </h1>
      <div className="flex-1 self-center">
        <img src={icon} alt="" className="w-[140px]" />
      </div>
    </div>
  );
};

export default ThirdCard;
