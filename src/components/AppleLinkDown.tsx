import { FaApple } from "react-icons/fa";

const AppleLinkDown = () => {
  return (
    <div className="w-[170px] bg-black py-[8px] flex rounded-3xl px-4 gap-3 cursor-pointer hover:scale-95">
      <div className="icon-apple  flex items-center">
        <FaApple color="white" size={30} />
      </div>
      <div className="flex-col ml-2">
        <p className="text-white text-[11px]">download on the</p>
        <h1 className="text-white text-[12px] font-bold ml-1">App Store</h1>
      </div>
    </div>
  );
};
export default AppleLinkDown;

//
