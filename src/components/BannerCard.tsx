import { PlayCircle } from "lucide-react";

const BannerCard = ({
  title,
  text,
  background,
}: {
  title: string;
  text: string;
  background: string;
}) => {
  return (
    <div
      className={`w-[600px] h-[300px] ${background}  relative rounded-4xl cursor-pointer hover:scale-105 transition-transform duration-150`}
    >
      <div className="px-10 py-10 w-full h-full  hover:translate-4 transition-all duration-150">
        <h1 className="font-bold text-6xl text-white uppercase">{title}</h1>
        <span className="text-xl text-gray-100/50 my-2">{text}</span>
      </div>
      <PlayCircle className="absolute bottom-3 left-3.5 text-white" size={30} />
    </div>
  );
};

export default BannerCard;
