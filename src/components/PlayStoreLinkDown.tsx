import image from "../../public/asset/logo apple dan playstore/play-store.png";

const PlayStoreDown = () => {
  return (
    <div className="w-[170px] bg-black py-[8px] flex rounded-3xl px-4 gap-3 cursor-pointer hover:scale-95">
      <div className="icon-apple  flex items-center">
        <img src={image} width={30} />
      </div>
      <div className="flex-col ml-2">
        <p className="text-white text-[11px]">Get it on</p>
        <h1 className="text-white text-[12px] font-bold ml-1">Play Store</h1>
      </div>
    </div>
  );
};

export default PlayStoreDown;
