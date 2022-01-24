import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import pawhubLogo from '../../assets/PawHub.png'
// import { isAuthenticated, removeToken} from '../../lib/auth'

function Nav() {
  // const navigate = useNavigate()
  const [sidebarShow, setSidebarShow] = React.useState(false)

  const handleSideBar = () => setSidebarShow(!sidebarShow)

  // const handleLogout = () => {
  //   removeToken()
  //   navigate('/')
  // }

  return (
    <>
      <nav className="nav-toggle">
        <div className="fullsize-navbar">
          <div className="flex float-left pl-24">
            <div className="m-3">
              <Link className="flex float-left" to="/">
                <img src={pawhubLogo} alt="logo" className="h-20  w-20"></img></Link>
            </div>
          </div>
          <div className="flex float-right">
            <div className="mt-7 m-3">
              <Link to="/dogs">View Dogs</Link>
            </div>
            <div className="mt-7 m-3">
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className="mt-7 m-3">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="mt-7 m-3">
              <Link to="/favourites">Favourites</Link>
            </div>
            <div className="mt-7 m-3">
              <Link to="/register">Register</Link>
            </div>
            <div className="mt-7 m-3 pr-24">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="nav burger-toggle ">
        <div className="flex float-left m-3 pl-4">
          <Link to="/"><img src={pawhubLogo} alt="logo" className="h-20  w-20"></img></Link>
        </div>
        <div className="flex fixed right-0 burger-icon mt-6 h-20 w-20" onClick={handleSideBar}>
          <Hamburger duration={0.35} toggle={setSidebarShow} toggled={sidebarShow} />
        </div>
        <div className={
          sidebarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
            <div className="m-1">
              <Link to="/dogs">Dogs</Link>
            </div>
            <div className="m-1">
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className="m-1">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="m-1">
              <Link to="/favourites">Favourites</Link>
            </div>
            <div className="m-1">
              <Link to="/register">Register</Link>
            </div>
            <div className="m-1">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}


export default Nav