function Footer () {

  return (
    <div className="h-auto bg-pawhub-grey text-white text-2xl flex flex-col items-center md:flex-row lg:flex-row xl:flex-row justify-around p-5">
      <div className="flex flex-col items-center sm:w-5/6 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-5">
        <h6 className="gooddog-font">The Page</h6>
        <p className="text-sm text-center">This page was made for Project 4 and is part of the General Assembly SEI-60 London course. We hope all of the dogs on this page find their forever home through the Dog&apos;s Trust</p>
      </div>

      <div className="flex flex-col items-center w-2/3 mx-5 md:w-1/3"><h6 className="gooddog-font">Links</h6>
        <ul className="sm:text-center flex flex-row md:flex-col">
          <li className="text-sm hover:text-pawhub-yellow px-1 md:px-0"><a href="/dogs">See all dogs</a></li>
          <li className="text-sm hover:text-pawhub-yellow px-1 md:px-0"><a href='/donation'>Donate</a></li>
          <li className="text-sm hover:text-pawhub-yellow px-1 md:px-0"><a href='/register'>Register</a></li>
          <li className="text-sm hover:text-pawhub-yellow px-1 md:px-0"><a href='/login'>Login</a></li>
        </ul>
      </div>

      <div className="flex flex-col items-center sm:w-5/6 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-5"><h6 className="gooddog-font"><a className="hover:text-pawhub-yellow" href='/aboutus/whoweare'>About Us</a></h6>
        <p className="text-sm text-center pb-5">To find out more about the developers behind the project click the about us link above</p>
        <p className="text-sm text-center">&copy; Alex Chan, Alex Theoklitou, Joe Freeman and Mike Salter</p>
      </div>
    </div>
  )
}

export default Footer