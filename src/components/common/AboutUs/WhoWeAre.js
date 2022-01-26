import React from 'react'

import twopawbanner from '../../../assets/twopawbanner.png'

function WhoWeAre() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font" id="title">Who We Are</h1>
        <p className="image-text text-lg mt-10" id="whoweare-tagline">
          Meet the team</p>
        <img src={twopawbanner} className="background-image" />
      </div>
      <div className="bg-pawhub-purple">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/aboutus" className="hover:underline">About Us</a></p>
      </div>
      <div className="bg-pawhub-yellow flex justify-center items-center p-5">

      </div>
    </>
  )
}

export default WhoWeAre