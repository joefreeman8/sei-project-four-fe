import React from 'react'
import twopawbanner from '../../../assets/twopawbanner.png'


function Fundraiser() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font" id="title">Fundraiser</h1>
        <p className="image-text text-lg mt-10" id="whoweare-tagline">
          Making moneyyyyyyy
        </p>
        <img src={twopawbanner} className="background-image" />
      </div>
      <div className="bg-pawhub-purple mt-2">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/aboutus" className="hover:underline">About Us</a> {'>'} Fundraiser</p>
      </div>
    </>
  )
}

export default Fundraiser