import { useMusicStore } from "../store/useMusicStore";
import { Album } from "../types/types";
import RecommendSong from "./RecommendSong";

const Recommend = () => {
  const { recommendedSongs } = useMusicStore();

  return (
    <div className="py-10">
      <h1 className="font-semibold text-2xl tracking-wider mb-5">
        Recommended For You
      </h1>
      <div className="flex gap-10">
        {(recommendedSongs as unknown as Album[])
          .slice(0, 4)
          .map((item: Album, index) => {
            return (
              <RecommendSong
                artist={item.strArtist}
                name={item.strAlbum}
                image={item.strAlbumThumb || ""}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Recommend;
