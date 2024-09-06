// app/dashboard/page.js
import Card from './components/Card';
import RecentActivity from './components/RecentActivity';
import Announcement from './components/Announcement';
import UpcomingSchedule from './components/UpcomingSchedule';
import EmployeeStats from './components/EmployeeStats';

export default function Dashboard() {
  return (
    <div className="p-4 space-y-4 relative overflow-scroll">
      <div className="flex md:flex-row gap-4 w-full sm:flex-col">
        {/* Cards */ /* left */}
        <div className="col-span-2 space-y-6 w-full ">
          <div className="flex flex-row justify-center items-center md:flex-row sm:flex-col gap-4 w-full">
            <Card
              title="Available Position"
              value="24"
              description="4 Urgently needed"
              color="lightOrange"
              className="bg-lightOrange text-textRed"
            />
            <Card
              title="Job Open"
              value="10"
              description="4 Active hiring"
              color="lightsky"
              className="bg-lightsky text-textsky"
            />
            <Card
              title="New Employees"
              value="24"
              description="4 Departments"
              color="lightPink"
              className="bg-lightPink text-textPink"
            />
          </div>
        
          <EmployeeStats />
          
          <Announcement />
         

         
        </div>

        {/* Right Section: Recent Activity and Schedule */}
        <div className=" space-y-6 w-auto  max-w-3xl flex lg:flex-col md:flex-row sm:flex-col">
          <RecentActivity />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

