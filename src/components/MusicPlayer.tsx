import { useState, useRef, ChangeEvent } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  ListMusic,
  Monitor,
} from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="w-full flex items-center  justify-start gap-10 bg-gradient-to-b from-pink-600 to-pink-500 px-4 py-16  shadow-lg fixed bottom-[-40px]">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-pink-800 flex items-center justify-center text-center ml-10"></div>

        <div className="pr-10">
          <h3 className="text-white font-bold">Mind-Blowing</h3>
          <p className="text-white text-sm opacity-70">Various Artists</p>
        </div>

        <button className="text-white text-lg border-2 rounded-full w-5 h-5 flex justify-center  items-center">
          +
        </button>
      </div>

      <div className="flex items-center justify-center gap-8 mt-4">
        <Shuffle className="text-white opacity-70 hover:opacity-100 cursor-pointer" />
        <SkipBack className="text-white opacity-70 hover:opacity-100 cursor-pointer" />

        <button
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause className="text-pink-600 w-6 h-6" />
          ) : (
            <Play className="text-pink-600 w-6 h-6" />
          )}
        </button>

        <SkipForward className="text-white opacity-70 hover:opacity-100 cursor-pointer" />
        <Repeat className="text-white opacity-70 hover:opacity-100 cursor-pointer" />
      </div>

      <div className="flex items-center gap-2 mt-3 w-[30rem] text-white text-sm ">
        <span>
          {Math.floor(currentTime / 60)}:
          {("0" + Math.floor(currentTime % 60)).slice(-2)}
        </span>
        <input
          type="range"
          className="w-full cursor-pointer"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <span>
          {Math.floor(duration / 60)}:
          {("0" + Math.floor(duration % 60)).slice(-2)}
        </span>
      </div>

      <div className="flex items-center justify-end gap-3 mt-3 text-white opacity-70">
        <ListMusic className="cursor-pointer hover:opacity-100" />
        <Monitor className="cursor-pointer hover:opacity-100" />
        <Volume2 className="cursor-pointer hover:opacity-100" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 cursor-pointer"
        />
      </div>

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onLoadedMetadata={() =>
          setDuration(audioRef.current ? audioRef.current.duration : 0)
        }
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
