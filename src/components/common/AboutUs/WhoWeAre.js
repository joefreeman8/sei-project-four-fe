import React from 'react'

import twopawbanner from '../../../assets/twopawbanner.png'
import linkedin from '../../../assets/linked.png'
import github from '../../../assets/github.png'


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
            <div className="columns-1 w-4/6 px-2 flex flex-col justify-between">
              <div>
                <h1 className="whoweare-name gooddog-font text-5xl">Alex Chan</h1>
                <p className="whoweare-p">My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.My name is Alex and i like Pokemon.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href='' target="_blank" rel="noopener noreferrer"><img src={linkedin} className="h-10 m-1" /></a>
                <a href='' target="_blank" rel="noopener noreferrer"><img src={github} className="h-10 m-1" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex flex-around lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/OaqmZ1am.jpg?2'} />
            </div>
            <div className="columns-1 w-4/6 px-2 flex flex-col justify-between">
              <div>
                <h1 className="whoweare-name gooddog-font text-5xl">Alex Theoklitou</h1>
                <p className="whoweare-p">My name is Alex and I like puzzles. I am a junior full-stack developer with experience in JS, React, Node, Django and Python. Having recently graduated from General Assembly, I am looking for an opportunity to hone my development skills, while also incorporating some of the skills I have gained in my previous career, working in a students union within the community engagement department.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href='https://www.linkedin.com/in/alex-theoklitou-622938142/' target="_blank" rel="noopener noreferrer"><img src={linkedin} className="h-10 m-1" /></a>
                <a href='https://github.com/alextheoklitou' target="_blank" rel="noopener noreferrer"><img src={github} className="h-10 m-1" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex flex-around lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/JWVnfPSm.jpg?1'} />
            </div>
            <div className="columns-1 w-4/6 px-2 flex flex-col justify-between">
              <div>
                <h1 className="whoweare-name gooddog-font text-5xl">Joe Freeman</h1>
                <p className="whoweare-p">
                  Hi! I&apos;m Joe, I love dogs, the outdoors & having sandy feet.
                  Over the past 12 weeks I have been enrolled on a Software Engineer Immersive course with General Assembly
                  and have been developing my skills in various languages to be confident in securing my first Jr full stack developer role.
                  My spare time consists sof wondering where I&apos;d like my next adventure to be,
                  taking the handsome chap in my photo for a run & practicing my new programming skills.
                  Have a look around & enjoy!
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href="https://www.linkedin.com/in/joefreeman8/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="h-10 m-1" /></a>
                <a href="https://github.com/joefreeman8" target="_blank" rel="noopener noreferrer"><img src={github} className="h-10 m-1" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-5/6 lg:w-4/6 m-3 p-6 shadow-xl">
          <div className="teamcard flex flex-around lg:start">
            <div className="columns-1 w-2/6 flex justify-center">
              <img src={'https://i.imgur.com/BHeBQmYm.jpg'} />
            </div>
            <div className="columns-1 w-4/6 px-2 flex flex-col justify-between">
              <div>
                <h1 className="whoweare-name gooddog-font text-5xl">Mike Salter</h1>
                <p className="whoweare-p">Hi I&apos;m Mike, this project was so fun to build, using Django, and React! It was the final part of my Software Engingeering Immersive Couse and I&apos;m looking to take the next step in my career. Outside of coding I&apos;m all about Japanese-studies, greyhound rescue, disabilty sport and fencing.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href='https://www.linkedin.com/in/michael-saltergb/' target="_blank" rel="noopener noreferrer"><img src={linkedin}  className="h-10 m-1" /></a>
                <a href='https://github.com/Msalter91' target="_blank" rel="noopener noreferrer"><img src={github}  className="h-10 m-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre