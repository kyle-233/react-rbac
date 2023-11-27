import { Outlet } from "react-router-dom"
import { HomePageLayout } from "../../layout"

const Home = () => {
  return (
    <div>
      <HomePageLayout>
        <Outlet />
      </HomePageLayout>
    </div>
  )
}

export default Home