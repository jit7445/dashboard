// /app/dashboard/layout.js


export default function DepartmentLayout({ children }: any) {
  return (
    <div className="flex flex-col w-full min-h-screen ">
     
       
        {/* Children (Main Content) */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          {children}
        </div>
      
    </div>
  );
}
