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
      className={`flex items-center justify-between w-full px-4 py-2 transition ${
        isHovered ? "bg-gray-200 rounded-md" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 min-w-[200px] flex-1">
        <div className="w-[50px] h-[50px] bg-gray-200 rounded-md relative overflow-hidden">
          <img
            src={image}
            className={`w-full h-full object-cover rounded-md ${
              isHovered ? "opacity-50" : ""
            }`}
            alt={name}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
              <PlayCircle className="text-white w-8 h-8" />
            </div>
          )}
        </div>
        <h2 className="font-semibold text-black truncate w-[120px]">{name}</h2>
      </div>

      <h2 className="text-gray-400 flex-1 min-w-[150px]">{artist}</h2>

      <div className="flex items-center gap-6">
        <h2 className="text-gray-400">{duration}</h2>
        <Heart />
        <p className="text-gray-400 font-bold">...</p>
      </div>
    </div>
  );
};

export default RecentSong;
