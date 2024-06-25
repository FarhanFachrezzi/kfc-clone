import igIcon from "../../public/asset/social media logo/ig logo.png";
import twitterIcon from "../../public/asset/social media logo/twitter logo.png";
import fbIcon from "../../public/asset/social media logo/facebook logo.png";
import ImgTester from "../../public/asset/crispy chicken/crispy chicken.jpeg";

const FirstPageComment = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="first flex px-4 gap-3">
        <div className="flex-1  bg-white relative flex flex-col rounded-lg ">
          <div className="mt-0 flex gap-2">
            <img
              src={twitterIcon}
              alt=""
              width={30}
              className="mt-[-5px] ml-[-2px]"
            />
            <h1 className="font-semibold">franco gaming</h1>
          </div>
          <div className="px-4 pb-4 ">
            <p className="text-[12px] ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex-1  bg-white relative flex flex-col rounded-lg ">
          <div className="mt-0 flex gap-2">
            <img
              src={twitterIcon}
              alt=""
              width={30}
              className="mt-[-5px] ml-[-2px]"
            />
            <h1 className="font-semibold">windah batubara</h1>
          </div>
          <div className="px-4 pb-4 ">
            <p className="text-[12px] ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-[160px] flex gap-4 px-5">
        <div className="bg-white flex-1 flex flex-col rounded-lg">
          <div className="mt-[-5px] ml-[-5px] flex gap-1">
            <img src={igIcon} alt="" width={30} />
            <h1 className="text-[12px] mt-2 font-semibold">Windah barusadar</h1>
          </div>
          <div className="flex-1 p-2">
            <div className="w-full h-[120px] relative overflow-hidden z-40 rounded-md">
              <img
                src={ImgTester}
                alt=""
                className="w-full h-full object-cover "
              />
              <div className="blank absolute w-full h-10 bg-black opacity-55 bottom-0"></div>
              <div className="absolute z-10 bottom-0 flex h-10 justify-center items-center w-full">
                <p className="text-white text-[10px] font-light">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex-1 flex flex-col rounded-lg">
          <div className="mt-[-5px] ml-[-5px] flex gap-1">
            <img src={fbIcon} alt="" width={29} />
            <h1 className="text-[12px] mt-2 font-semibold">meguel alvasto</h1>
          </div>
          <div className="flex-1 px-3">
            <p className="text-[12px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              nostrum dolorem obcaecati aliquid, quam qui.
            </p>
          </div>
        </div>
        <div className="bg-white flex-1 flex flex-col rounded-lg">
          <div className="mt-[-5px] ml-[-5px] flex gap-1">
            <img src={fbIcon} alt="" width={29} />
            <h1 className="text-[12px] mt-2 font-semibold">Wilson Lo siento</h1>
          </div>
          <div className="flex-1 px-3">
            <p className="text-[12px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              nostrum dolorem obcaecati aliquid, quam qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageComment;
