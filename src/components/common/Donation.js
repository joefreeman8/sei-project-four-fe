import React from 'react'
import backgroundImage from '../../assets/Pawprint-Background.png'

function Donation() {
  return (

    <><div className="h-full w-full bg-center bg-cover home-header"></div>
      <div className="container min-w-full ">


        <img className="bg-cover mx-auto w-2/8 lg:w-full h-1/6" src="https://i.imgur.com/QEhZ5UG.png"></img>

        {/* <div className="background-image: url('https://i.imgur.com/QEhZ5UG.png')"></div> */}

        <img src={backgroundImage} className="bg-repeat  pawprint-background"/>

        {/* <div className="bg-rehoming-header pt-2 pb-0"> */}
        <form className="bg-white shadow-xl w-2/5 ml-40 mt--10 px-5 pt-5 pb-5">
          <p className="text-2xl font-semibold">Donate Now</p>
          <p className="text-sm">Your kind donations help us provide life changing care and forever homes for over 14,000 of our furry friends.</p>
          <br></br>
          <p className="text-sm">We really appreciate your support (and we know the dogs do too!)</p>
        </form>
      </div></>
    // </div>


  )
}

export default Donation