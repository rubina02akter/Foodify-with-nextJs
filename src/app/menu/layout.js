import Menu from './menu.jsx'
export default function layout({children}) {
  return (
    <div className='grid grid-cols-5 gap-6 min-h-screen pt-20 '>
    <div className='col-span-1 '>
    <Menu />
    </div>
    <div className='col-span-4 '>
    {children}
    </div>
   </div>
  )
}
