import CardInformation from "./CardInformation";
import CardInformationButtom from "./CardInformationButtom";

const CardInformationCont = () => {
  return (
    <section className="  flex justify-center items-center py-24 flex-col">
      <div className="card-information-container flex flex-col justify-center items-center m-auto w-[80%] gap-5">
        <CardInformation />
        <CardInformationButtom />
      </div>
    </section>
  );
};

export default CardInformationCont;
