import { PlayCircle } from "lucide-react";
import { useState } from "react";

const RecommendSong = ({
  image,
  name,
  artist,
}: {
  image: string;
  name: string;
  artist: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <div>
      <div
        className="w-[150px] h-[180px] bg-gray-400 rounded-md relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover rounded-md ${
            isHovered && "opacity-50"
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 top-[30%] left-[20%] w-full h-full ">
            <PlayCircle className="text-gray-100 w-20 h-20" />
          </div>
        )}
      </div>
      <h2 className="font-semibold mt-2">{name}</h2>
      <h3 className="tex-md text-gray-400">{artist}</h3>
    </div>
  );
};

export default RecommendSong;
