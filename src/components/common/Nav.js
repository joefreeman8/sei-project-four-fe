import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom'
import pawhubLogo from '../../assets/PawHub.png'
import { isAuthenticated, removeToken } from '../../lib/auth'
import { getUserId } from '../../lib/auth'
import { createNotification } from '../../lib/notification'

function Nav() {
  const navigate = useNavigate()
  const isAuth = isAuthenticated()
  const [sidebarShow, setSidebarShow] = React.useState(false)
  const userId = getUserId()

  const handleSideBar = () => setSidebarShow(!sidebarShow)

  const handleLogout = () => {
    removeToken()
    navigate('/')
    createNotification('Time for a walk? See you soon!')
  }

  return (
    <>
      {/* NAV FOR FULLSCREEN */}
      <nav className="nav-toggle sticky top-0 h-24 bg-white/80 z-50">
        <div className="flex float-left mt-2 pl-24">
          <Link className="flex float-left" to="/">
            <img src={pawhubLogo} alt="logo" className="h-20 w-20"></img></Link>
        </div>
        <div className="flex float-right mt-8 text-lg items-center">
          <Link className="mx-2" to="/dogs">View Dogs</Link>
          <Link className="mx-2" to="/aboutus">About Us</Link>
          <Link className="mx-2" to="/donation">Donate Now</Link>
          <Link className="mx-2" to="/newsletter">Newsletter</Link>
          {isAuth ? (
            <>
              <Link className="mx-2" to={`/profile/${userId}`}>Profile</Link>
              <button
                className="shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-5 rounded mr-24"
                onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="mx-2" to="/register">Register</Link>
              <Link className="mx-2 pr-24" to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>


      {/* NAVBAR for Burger */}
      <nav className="nav burger-toggle inline z-50">
        <div className="flex float-left m-3 pl-4 z-50">
          <Link to="/"><img src={pawhubLogo} alt="logo" className="h-20 w-20"></img></Link>
        </div>
        <div className="flex fixed right-0 burger-icon mt-6 h-20 w-20 z-50" onClick={handleSideBar}>
          <Hamburger duration={0.35} toggle={setSidebarShow} toggled={sidebarShow} />
        </div>
        <div className={
          sidebarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
            <div className="m-1">
              <Link to="/dogs">View Dogs</Link>
            </div>
            <div className="m-1">
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className="m-1">
              <Link to="/donation">Donate Now</Link>
            </div>
            <div className="m-1">
              <Link to="/newsletter">Newsletter</Link>
            </div>
            {isAuth ? (
              <>
                <div className="m-1">
                  <Link to={`/profile/${userId}`}>Profile</Link>
                </div>
                <div>
                  <button
                    className="shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-3 ml-1 rounded"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="m-1">
                  <Link to="/register">Register</Link>
                </div>
                <div className="m-1">
                  <Link to="/login">Login</Link>
                </div>
              </>
            )}
          </div>
        </div>

      </nav>
    </>
  )
}


export default Nav