import imgicon from "../../public/asset/hope/hope logo.jpeg";
const CardFifth = () => {
  return (
    <div className="flex-1 px-2 mr-9 ">
      <div className="w-full bg-white flex p-3 gap-2 shadow-lg rounded-md ">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="font-bold text-xl self-center mt-5">
            DO YOU WANT <br />
            BE A HOPE ?
          </h1>
          <button className="w-[150px] bg-cyan-500 h-[30px] flex justify-center items-center rounded-lg ml-7 hover:scale-95 duration-100">
            <p className="font-semibold text-white ">SHOW MORE</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="p-4 bg-cyan-700 rounded-full hover:scale-95 duration-200">
            <img
              src={imgicon}
              alt=""
              className="rounded-full w-[118px] h-[118px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFifth;
