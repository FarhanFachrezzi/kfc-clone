import { FaWhatsapp } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer h-[70px] bg-red-600 w-full">
      <div className="Wrapper h-full w-[80%] mx-auto flex gap-5 justify-between items-center">
        <div className="flex h-full items-center gap-14">
          <h1 className="font-Friz text-white text-5xl">KFC</h1>
          <div className="flex gap-2 items-center">
            <FaWhatsapp color="white" size={40} />
            <p className="text-base font-medium text-white">+12394 324</p>
          </div>
          <div className="flex gap-2 items-center">
            <CiShop color="white" size={40} />
            <p className="text-base font-medium text-white">+12394 324</p>
          </div>
        </div>
        <div className="h-full flex items-center gap-2">
          <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <FaFacebookF color="white" />
          </div>
          <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <IoLogoTwitter color="white" />
          </div>
          <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <FaYoutube color="white" />
          </div>
          <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <FaInstagram color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
