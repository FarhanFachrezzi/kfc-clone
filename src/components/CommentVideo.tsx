import CommentCont from "./CommentCont";
import ReactPlayer from "react-player";

const CommentVideo = () => {
  return (
    <div className="w-[80%] h-[500px] flex py-[140px]  mx-auto  gap-4">
      <CommentCont />
      <div className="flex-1  h-[260px] ">
        <ReactPlayer
          url="https://youtu.be/9h5KmY_aAtg?si=M78LBFAfQIwqBRNv"
          width={"500px"}
          height={"100%"}
        />
      </div>
    </div>
  );
};
export default CommentVideo;
