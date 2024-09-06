// app/components/Header.js
import { BellIcon } from '@heroicons/react/solid';
import { ChatIcon } from '@heroicons/react/outline';
import { IconMessage, IconSearch} from "@tabler/icons-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";

export default function MobileHeader() {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* Left: Hamburger Menu and Search Bar */}
      <div className="flex items-center space-x-2">
        <RxHamburgerMenu className="h-6 w-6 text-gray-500 cursor-pointer" />
        <IconSearch className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>

      {/* Right: Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification and Chat Icons */}
        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </div>

        <div className="relative">
          <MdOutlineMessage className="h-6 w-6 text-gray-500 cursor-pointer" />
        
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/profile.jpg" // Use a local or external image
            alt="User Profile"
            className="h-10 w-10 rounded-full object-cover bg-red-400"
          />
          <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
}