export default function SettingLayout({ children }: any) {
  return (
    <div className="flex flex-col w-full min-h-screen ">
     
        <h1>setting</h1>
        {/* Children (Main Content) */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          {children}
        </div>
      
    </div>
  );
}