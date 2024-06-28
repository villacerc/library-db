import { Outlet } from "react-router-dom";

function Layout () {
  return (
    <div className='container w-full md:max-w-3xl mx-auto pt-20'>
      <Outlet />
    </div>
  )
};

export default Layout;