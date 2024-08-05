import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl">at home</span>
      </nav>
      <Outlet />
    </>
  )
}

export default HomeLayout