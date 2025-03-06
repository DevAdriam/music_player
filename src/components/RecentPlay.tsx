import { useMusicStore } from "../store/useMusicStore";
import RecentSong from "./RecentSong";
import RecentSongLoader from "./RecentSongLoader";

const RecentPlay = () => {
  const { recentSongs, recommendedSongs, isLoadingRecent } = useMusicStore();

  const formatMilliseconds = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="py-10 w-[40%]">
      <h1 className="font-semibold text-2xl tracking-wider mb-5">
        Recently Played
      </h1>

      {isLoadingRecent
        ? [1, 2, 3, 4].map(() => {
            return <RecentSongLoader />;
          })
        : recentSongs.slice(0, 4).map((item, index) => {
            return (
              <RecentSong
                artist={item.strArtist}
                duration={formatMilliseconds(Number(item.intDuration))}
                name={item.strTrack}
                image={recommendedSongs[2]?.strAlbumThumb || ""}
                key={index}
              />
            );
          })}
    </div>
  );
};

export default RecentPlay;
