import { create } from "zustand";
import axios from "axios";
import { Album, Track } from "../types/types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface MusicState {
  recentSongs: Track[];
  recommendedSongs: Album[];
  isLoadingRecent: boolean;
  isLoadingRecommended: boolean;
  fetchRecentSongs: () => Promise<void>;
  fetchRecommendedSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicState>((set) => ({
  recentSongs: [],
  recommendedSongs: [],
  isLoadingRecent: false,
  isLoadingRecommended: false,

  fetchRecentSongs: async () => {
    set({ isLoadingRecent: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/${API_KEY}/track.php?m=2115888`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const songs: Track[] = (response.data?.track satisfies Track) ?? [];
      set({ recentSongs: songs });
    } catch (error) {
      console.error("Error fetching recent songs:", error);
    } finally {
      set({ isLoadingRecent: false });
    }
  },

  fetchRecommendedSongs: async () => {
    set({ isLoadingRecommended: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/${API_KEY}/album.php?i=112024`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const songs: Album[] = (response.data?.album satisfies Album) ?? [];
      set({ recommendedSongs: songs });
    } catch (error) {
      console.error("Error fetching recommended songs:", error);
    } finally {
      set({ isLoadingRecommended: false });
    }
  },
}));
