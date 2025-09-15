import React from "react";
import { RefreshCcw, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ title = "Dashboard" }) => {
  const user = useSelector((state) => state.auth.user);

  // Normalize data
  const role = user?.role || "Role";
  const name = user?.name || "User";

  return (
    <header className="flex justify-between items-center pt-5 pb-2 px-4 md:py-5 md:px-6">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4 ">
        {/* Refresh Button */}
        <button
          aria-label="Refresh Dashboard"
          className="flex items-center px-2 py-1 md:px-5 md:py-2 text-gray-500 text-[10px] md:text-sm border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <RefreshCcw className="w-3.5 h-3.5 mr-2 text-black" />
          <span className="hidden sm:inline">Refresh</span>
        </button>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <div className="font-semibold text-[10px] md:text-xs pl-3 md:pl-5.5">
              {role}
            </div>
            <div className="text-xs md:text-sm text-gray-500">Hi, {name}</div>
          </div>
          <img
            src={`https://i.pravatar.cc/40?u=${name}`}
            alt={name}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;
