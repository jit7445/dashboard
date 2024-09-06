export default function UpcomingSchedule() {
  return (
    <div className="p-6 bg-white text-white rounded-lg shadow-lg w-full ">
      <div className="mb-2 flex flex-row justify-between  gap-4">
        <h4 className=" text-gray-800">Upcoming Schedule</h4>
        <select className="bg-white border border-gray-300 text-gray-600 p-2 rounded-md text-sm">
          <option>22 Sept 2022</option>
          {/* Add other options as needed */}
        </select>

      </div>
      <div className="space-y-4">
        {/* Announcement Item */}
        <h4 className="text-gray-400">Priorty</h4>
        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
              {/* Pin Icon */}
            <span className="text-gray-700 cursor-pointer text-2xl">...</span> {/* More options */}
          </div>
        </div>

        {/* Repeat announcement items */}
        <h4 className="text-gray-400">Other</h4>
        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
             
            <span className="text-gray-700 cursor-pointer text-2xl">...</span>
          </div>
        </div>

        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
             
            <span className="text-gray-700 cursor-pointer text-2xl">...</span>
          </div>
        </div>

        <div className="flex justify-between items-start bg-boxbg p-4 rounded-md">
          <div>
            <h4 className="text-gray-600 font-semibold">Outing schedule for every department</h4>
            <p className="text-sm text-gray-400">5 Minutes ago</p>
          </div>
          <div className="flex items-center space-x-2">
             
            <span className="text-gray-700 cursor-pointer text-2xl">...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
