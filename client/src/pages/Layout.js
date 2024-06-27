import { Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <div className='tailwind'>
      <Outlet />
    </div>
  )
};

export default Layout;