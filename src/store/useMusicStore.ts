import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Song {
  idTrack: string;
  strTrack: string;
  strArtist: string;
  strAlbumThumb: string;
}

interface MusicState {
  recentSongs: Song[];
  recommendedSongs: Song[];
  fetchRecentSongs: () => Promise<void>;
  fetchRecommendedSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicState>((set) => ({
  recentSongs: [],
  recommendedSongs: [],

  fetchRecentSongs: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${API_KEY}/track.php?m=2115888`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const songs: Song[] = response.data?.track ?? []; // Ensure default empty array
      set({ recentSongs: songs });
    } catch (error) {
      console.error("Error fetching recent songs:", error);
    }
  },

  fetchRecommendedSongs: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${API_KEY}/album.php?i=112024`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const songs: Song[] = response.data.album ?? []; // Ensure default empty array
      set({ recommendedSongs: songs });
    } catch (error) {
      console.error("Error fetching recommended songs:", error);
    }
  },
}));
