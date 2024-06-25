interface PropsType {
  i: number;
  currentIndex: number;
  handleSlide: (i: number) => void;
}

const Slide = ({ i, currentIndex, handleSlide }: PropsType) => {
  return (
    <div
      className={`w-5 h-3 rounded-3xl ${
        i === currentIndex ? "bg-white" : "bg-none"
      }  border-white border-2 cursor-pointer duration-1000`}
      onClick={() => {
        handleSlide(i);
      }}
    ></div>
  );
};

export default Slide;
