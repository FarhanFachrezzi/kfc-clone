import menus from "../datas/menus.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menus = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    variableWidth: true,
  };
  return (
    <div className="m-0 w-full  bg-yellow-500 relative py-5">
      <div className="icon-menu w-[90px] py-1 bg-white absolute left-[49%] top-[-20px] rounded-md flex items-center justify-center text-black font-semibold text-lg">
        <p style={{ font: "arial" }} className="menus-title">
          Menus
        </p>
      </div>
      <div className="wrapper-img-icon w-[800px] h-full  mx-auto ">
        <Slider {...settings}>
          {menus.map((menu) => {
            return (
              <div style={{ width: "160px" }} key={menu.nama_product}>
                <div className="flex flex-col justify-center items-center cursor-pointer">
                  <img src={menu.src} alt="" className="w-[60px] h-[60px]" />
                  <p className="text-white text-lg " style={{ font: "arial" }}>
                    {menu.nama_product}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Menus;
