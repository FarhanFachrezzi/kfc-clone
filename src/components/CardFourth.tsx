import imgicon from "../../public/asset/crispy chicken/crispy chicken.jpeg";
const CardFourth = () => {
  return (
    <div className="flex-1 px-2 h-[180px] ">
      <div className="w-full bg-white flex p-3 gap-2 shadow-lg rounded-md">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="font-bold text-xl self-center">
            CRISPY AND <br />
            FRESH CHICKEN
            <br />
            MASTER CHEF
          </h1>
          <button className="w-[150px] bg-red-500 h-[30px] flex justify-center items-center rounded-lg ml-7 hover:scale-95 duration-100">
            <p className="font-semibold text-white ">SHOW MORE</p>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center hover:scale-95 duration-200">
          <img
            src={imgicon}
            alt=""
            className="rounded-full w-[150px] h-[150px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFourth;
