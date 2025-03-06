import { useEffect } from "react";
import Banner from "../components/Banner";
import MusicPlayer from "../components/MusicPlayer";
import RecentPlay from "../components/RecentPlay";
import Recommend from "../components/Recommend";
import SideNav from "../components/SideNav";
import { useMusicStore } from "../store/useMusicStore";

const Dashboard = () => {
  const { fetchRecentSongs, fetchRecommendedSongs } = useMusicStore();

  useEffect(() => {
    fetchRecentSongs();
    fetchRecommendedSongs();
  }, [fetchRecentSongs, fetchRecommendedSongs]);

  return (
    <>
      <div className="w-full flex bg-white min-h-[85vh] max-h-[85vh] rounded-b-4xl relative shadow-lg shadow-gray-500/0 overflow-x-hidden z-10">
        <SideNav />
        <section className="p-10 relative left-60">
          <Banner />
          <div className="flex gap-8">
            <RecentPlay />
            <Recommend />
          </div>
        </section>
      </div>
      <MusicPlayer />
    </>
  );
};

export default Dashboard;
