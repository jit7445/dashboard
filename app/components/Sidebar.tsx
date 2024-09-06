// app/components/Sidebar.js
import Link from 'next/link';
import { 
  IconLayoutDashboard, 
  IconUsers, 
  IconCalendarEvent, 
  IconBriefcase, 
  IconBuilding, 
  IconSettings, 
  IconHelp 
} from '@tabler/icons-react'; 

export default function Sidebar() {
  return (
    <div className="w-64  bg-white text-gray-800 flex flex-col p-4 shadow-lg h-full">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-textlogo">Vasitum</h2>
      </div>

      <nav className="p-2 flex flex-col gap-12">
        {/* Main Menu */}
        <div className="flex flex-col gap-8">
          <div className="text-start align-text-top uppercase">
            <h2 className="flex items-center text-sm text-textsidebar tracking-wider">Main Menu</h2>
          </div>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconLayoutDashboard className="w-6 h-6 text-textsidebar" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/recruitment" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconBriefcase className="w-6 h-6 text-textsidebar" />
                <span>Recruitment</span>
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconCalendarEvent className="w-6 h-6 text-textsidebar" />
                <span>Schedule</span>
              </Link>
            </li>
            <li>
              <Link href="/employee" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconUsers className="w-6 h-6 text-textsidebar" />
                <span>Employee</span>
              </Link>
            </li>
            <li>
              <Link href="/department" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconBuilding className="w-6 h-6 text-textsidebar" />
                <span>Department</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Menu */}
        <div className="flex flex-col gap-8">
          <div className="text-start align-text-top uppercase">
            <h5 className="flex items-center text-sm text-textsidebar tracking-wider">Other</h5>
          </div>
          <ul className="space-y-4">
            <li>
              <Link href="/support" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconHelp className="w-6 h-6 text-textsidebar" />
                <span>Support</span>
              </Link>
            </li>
            <li>
              <Link href="/setting" className="flex items-center space-x-2 text-textsidebar hover:text-textonlcick">
                <IconSettings className="w-6 h-6 text-textsidebar" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
