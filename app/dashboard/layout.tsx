// /app/dashboard/layout.js
// /app/dashboard/layout.js
import Header from '../components/Header';

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="flex flex-col w-full max-w-7xl mx-auto justify-center items-center pt-2">
        <div className="flex justify-start w-full">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Dashboard</h1>
        </div>
        
        {/* Children (Main Content) */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
