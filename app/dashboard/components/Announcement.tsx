// app/dashboard/components/Announcement.js
export default function Announcement() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-bold text-gray-700">Announcement</h4>
        <select className="bg-white border border-gray-300 text-gray-600 p-2 rounded-md text-sm">
          <option>22 Sept 2022</option>
          {/* Add other options as needed */}
        </select>
      </div>

      <div className="space-y-4">
        {/* Announcement Item */}
        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 cursor-pointer">📌</span> {/* Pin Icon */}
            <span className="text-gray-700 cursor-pointer text-2xl">...</span> {/* More options */}
          </div>
        </div>

        {/* Repeat announcement items */}
        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 cursor-pointer">📌</span>
            <span className="text-gray-700 cursor-pointer text-2xl">...</span>
          </div>
        </div>

       

        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 cursor-pointer">📌</span>
            <span className="text-gray-700 cursor-pointer text-2xl">...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
