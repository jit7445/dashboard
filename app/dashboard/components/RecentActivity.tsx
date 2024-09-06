// app/dashboard/components/RecentActivity.js
export default function RecentActivity() {
  return (
    <div className="p-4 bg-activityboxbg text-white rounded-lg shadow-lg w-auto content-fit">
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Recent Activity</h4>
      </div>
      <div className="border-t border-gray-700 pt-4 max-w-3xl">
        <div className="mb-4">
          <p className="text-xs text-gray-400">10:40 AM, Fri 10 Sept 2021</p>
          <p className="mt-2 text-lg font-semibold">You Posted a New Job</p>
          <p className="mt-1 text-sm text-gray-300">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>
        <div className="flex md:flex-row justify-between  mt-4 gap-4 sm:flex-col">
          <p className="text-sm text-nowrap text-gray-400">Today you made 12 activities</p>
          <button className="bg-buttbg text-white text-nowrap py-2 px-4 rounded-md md:w-auto sm:w-1/3">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
