import React from 'react'

import twopawbanner from '../../../assets/twopawbanner.png'

function WhoWeAre() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font" id="title">Who We Are</h1>
        <p className="image-text text-lg" id="tagline">
          Meet the team...</p>
        <img src={twopawbanner} className="background-image w-full mt-5" />
      </div>
      <div className="bg-pawhub-purple mt-2">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/aboutus" className="hover:underline">About Us</a> &gt; Who We Are</p>
      </div>
      <div className="bg-pawhub-yellow flex flex-col items-center p-5">
        <div className="bg-white w-5/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex flex-around lg:start">
            <div className="columns-1 w-2/6">
              <img src={'https://i.imgur.com/lOBnsJQm.jpg'} />
            </div>
            <div className="teamcard-content columns-1 w-4/6">
              <h1 className="whoweare-name gooddog-font text-5xl">Alex Chan</h1>
              <p className="whoweare-p">My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6">
              <img src={'https://i.imgur.com/OaqmZ1am.jpg?2'} />
            </div>
            <div className="columns-1 w-4/6">
              <h1 className="whoweare-name gooddog-font text-5xl">Alex Theoklitou</h1>
              <p className="whoweare-p">My name is Alex and i like puzzles. My name is Alex and i like puzzles. My name is Alex and i like puzzles. My name is Alex and i like puzzles. My name is Alex and i like puzzles. My name is Alex and i like puzzles.</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6">
              <img src={'https://i.imgur.com/JWVnfPSm.jpg?1'} />
            </div>
            <div className=" pl-2 columns-1 w-4/6">
              <h1 className="whoweare-name gooddog-font text-5xl">Joe Freeman</h1>
              <p className="whoweare-p">Hi! I&apos;m Joe, a dog loving, travel obsessed, newly graduated software engineer.</p>

            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6">
              <img src={'https://i.imgur.com/JWVnfPSm.jpg?1'} />
            </div>
            <div className="pl-2 columns-1 w-4/6">
              <h1 className="whoweare-name gooddog-font text-5xl">Mike Salter</h1>
              <p className="whoweare-p">My name is Mike and i look a lot like Joe in my photo. My name is Mike and i look a lot like Joe in my photo. My name is Mike and i look a lot like Joe in my photo. My name is Mike and i look a lot like Joe in my photo.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre