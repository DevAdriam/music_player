import { Home, Music, ListMusic, Users, LineChart, Plus } from "lucide-react";

const SideNav = () => {
  return (
    <aside className="min-w-[18%] bg-white p-4 sh h-[85vh] rounded-b-4xl  border-r-2 border-gray-100/50 flex flex-col gap-10 fixed">
      <div className="flex items-center space-x-3 mb-6">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Joshua</p>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded">PREMIUM</span>
        </div>
      </div>

      <nav className="flex gap-5 flex-col">
        <p className="text-gray-500/50 font-bold text-md uppercase ">Browse</p>
        <ul className="space-y-5">
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <Home size={18} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <Music size={18} />
            <span>Songs</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <ListMusic size={18} />
            <span>Playlists</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <Users size={18} />
            <span>Just for You</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <LineChart size={18} />
            <span>Top Charts</span>
          </li>
        </ul>
      </nav>

      <div>
        <div className="flex gap-10 mb-5">
          <p className="text-gray-500/50 uppercase font-bold text-md">
            Your Playlists
          </p>
          <button className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer mb-3">
            <div className="border-2 rounded-full">
              <Plus size={18} />
            </div>
          </button>
        </div>

        <ul className="space-y-5">
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <ListMusic size={18} />
            <span>Workout Mix</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <ListMusic size={18} />
            <span>Chillin’ at Home</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <ListMusic size={18} />
            <span>Booping at Adobe</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500 cursor-pointer">
            <ListMusic size={18} />
            <span>XD 4 Life</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
