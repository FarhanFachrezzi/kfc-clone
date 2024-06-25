import KfcMobileImg from "../../public/asset/kfc mobile/1.png";

import AppleLinkDown from "./AppleLinkDown";
import PlayStoreDown from "./PlayStoreLinkDown";
const KfcMobileLinks = () => {
  return (
    <section className="w-full h-[200px] bg-yellow-500 flex relative gap-7">
      <img
        src={KfcMobileImg}
        alt=""
        width={270}
        className="absolute top-[-80px] left-[220px]"
      />
      <div className="flex-1"></div>
      <div className="flex-1 flex py-6 flex-col gap-5">
        <h1 className="font-bold text-white text-2xl">
          NOW WITH YOUR FAVORITE <br />
          KFC MOBILE APPLICATION <br /> IN YOUR POCKET
        </h1>
        <div className="flex items-center gap-2">
          <AppleLinkDown />
          <PlayStoreDown />
        </div>
      </div>
    </section>
  );
};

export default KfcMobileLinks;
