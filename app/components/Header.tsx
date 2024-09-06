// app/components/Header.js
import { BellIcon } from '@heroicons/react/solid';
import { ChatIcon } from '@heroicons/react/outline';
 // You can use Heroicons or any other icon library

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* Left: Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-80 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right: Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification and Chat Icons */}
        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </div>

        <div className="relative">
          <ChatIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/profile.jpg" // Use a local or external image
            alt="User Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="text-gray-700">
            <h4 className="font-semibold">Jitender</h4>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
}
