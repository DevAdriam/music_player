const RecentSongLoader = () => {
  return (
    <div className="flex items-center justify-between w-[40%] px-4 py-2 animate-pulse">
      <div className="flex items-center gap-4 min-w-[200px] flex-1">
        <div className="w-[50px] h-[50px] bg-gray-300 rounded-md" />
        <div className="w-[120px] h-4 bg-gray-300 rounded-md" />
      </div>
      <div className="w-[150px] h-4 bg-gray-300 rounded-md flex-1" />
      <div className="flex items-center gap-6">
        <div className="w-10 h-4 bg-gray-300 rounded-md" />
        <div className="w-6 h-6 bg-gray-300 rounded-md" />
        <div className="w-6 h-6 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default RecentSongLoader;
