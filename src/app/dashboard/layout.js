import Router from '../dashboard/router.jsx'
export default function DashboardLayout({ children }) {
  return (
  <div className='grid grid-cols-4  min-h-screen'>
   <div className='col-span-1 '>
   <Router />
   </div>
   <div className='col-span-3 '>
   {children}
   </div>
  </div>
  );
}

