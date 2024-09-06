// app/dashboard/components/EmployeeStats.js
export default function EmployeeStats() {
  return (
    <div className="flex flex-col gap-4 mt-6 sm:flex-row w-full  ">
      <div className="p-4 bg-white rounded-lg shadow-md w-full">
        <div>
        <h4 className="text-lg font-bold text-gray-700">Total Employees</h4>
        <p className="text-3xl font-bold text-gray-700">216</p>
        <p className="text-sm text-gray-500">120 Men<br/> 96 Women</p>
        </div>
        <div>

        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md w-full text-gray-700">
        <div>
        <h4 className="text-lg font-bold text-gray-700">Talent Request</h4>
        <p className="text-3xl font-bold">16</p>
        <p className="text-sm text-gray-500">6 Men<br/> 10 Women</p>
        </div>
        
      </div>
    </div>
  );
}
