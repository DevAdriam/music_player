import { useMusicStore } from "../store/useMusicStore";
import RecommendLoader from "./RecommendLoader";
import RecommendSong from "./RecommendSong";

const Recommend = () => {
  const { recommendedSongs, isLoadingRecommended } = useMusicStore();

  return (
    <div className="py-10">
      <h1 className="font-semibold text-2xl tracking-wider mb-5">
        Recommended For You
      </h1>
      <div className="flex gap-10">
        {isLoadingRecommended
          ? [1, 2, 3].map((index) => {
              return <RecommendLoader key={index} />;
            })
          : recommendedSongs.slice(0, 4).map((item, index) => {
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
