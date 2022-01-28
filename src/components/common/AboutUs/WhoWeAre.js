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
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex flex-around lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/lOBnsJQm.jpg'} />
            </div>
            <div className="columns-1 w-4/6 px-2">
              <h1 className="whoweare-name gooddog-font text-5xl">Alex Chan</h1>
              <p className="whoweare-p ">Thank you for visiting this site, I&apos;m Alex! After an enjoyable career in Menswear Fashion & Graphic Design, I decided to make a career change and joined the Software Engineer Immersive course at General Assembly. As I reach the end of this course, I will walk away knowing I have a new skillset to start my journey into coding and met a great bunch of friends along the way! I particularly enjoy front-end web design and have recent experience working with framesworks (Tailwind 3.0, Bootstrap 5.0, Bulma etc) Trainee Developer at your service!</p>
              <br></br>
              https://github.com/Achan81
              https://www.linkedin.com/in/achan81/

              
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/OaqmZ1am.jpg?2'} />
            </div>
            <div className="columns-1 w-4/6 px-2">
              <h1 className="whoweare-name gooddog-font text-5xl">Alex Theoklitou</h1>
              <p className="whoweare-p">My name is Alex and I like puzzles. I am a junior full-stack developer with experience in JS, React, Node, Django and Python. Having recently graduated from General Assembly,I am looking for an opportunity to hone my development skills, while also incorporating some of the skills I have gained in my previous career, working in a students union within the community engagement department. I have wide experience in working with a team, often as a project manager working on training conferences, large scale event planning and volunteer management.</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/JWVnfPSm.jpg?1'} />
            </div>
            <div className="columns-1 w-4/6 px-2">
              <h1 className="whoweare-name gooddog-font text-5xl">Joe Freeman</h1>
              <p className="whoweare-p">
                Hi! I&apos;m Joe, a dog loving, travel obsessed, newly graduated software engineer.
                After taking the first baby steps with General Assembly this is the work & the team and I have managed to create with Django, React and the framework Tailwind. 
                I am super excited to continue learning in this vast sea of numbers, letters and pretty websites. I hope you enjoy the app & the dogs on show!
              </p>

            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/JWVnfPSm.jpg?1'} />
            </div>
            <div className="columns-1 w-4/6 px-2">
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