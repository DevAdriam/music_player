import { Heart, PlayCircle } from "lucide-react";
import { useState } from "react";

const RecentSong = ({
  artist,
  name,
  duration,
  image,
}: {
  artist: string;
  name: string;
  duration: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex justify-start items-center gap-12 py-1 my-2 px-3 ${
        isHovered && "bg-gray-200 rounded-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center gap-4  items-center">
        <div className="max-w-[50px] w-[50px] h-[50px] bg-gray-200 rounded-md hover:bg-gray-800 relative">
          <img
            src={image}
            className={`w-full h-full object-cover rounded-md ${
              isHovered && "opacity-50"
            }`}
            alt={name}
          />
          {isHovered && (
            <div className="w-full h-full absolute inset-0 flex items-center justify-center rounded-md  bg-opacity-50">
              <PlayCircle className="text-gray-100 w-8 h-8" />
            </div>
          )}
        </div>
        <h2 className="font-semibold max-w-[50px] w-[50px] ">{name}</h2>
      </div>

      <h2 className="text-gray-400">{artist}</h2>
      <h2 className="text-gray-400">{duration}</h2>
      <Heart />
      <p className="text-gray-400 font-bold">...</p>
    </div>
  );
};

export default RecentSong;
