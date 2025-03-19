// import Profile from "./Profile"
import { Link, Outlet } from "react-router-dom"


const About = () => {
  return (
    <div>
      <h2>This is About Us page</h2>
      <Link to='profile'>profile</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default About
