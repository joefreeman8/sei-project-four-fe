import React from 'react'
import twopawbanner from '../../../assets/twopawbanner.png'


function Fundraiser() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font mb-5" id="title">Fundraiser</h1>
        <p className="image-text text-lg mt-10" id="fundraiser-tagline">
          Thanks to your generosity we can help save these wonderful animals.
        </p>
        <img src={twopawbanner} className="about-paw-banner background-image" />
      </div>
      <div className="bg-pawhub-purple mt-2">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/aboutus" className="hover:underline">About Us</a> {'>'} Fundraiser</p>
      </div>

      {/* FULL SIZE SCREEN */}
      <div className="fundraiser-background h-full w-full bg-center bg-cover py-48 px-10">
        <div className="-bt-48 bg-white/50 h-2/6 w-2/3 flex flex-col justify-center items-center p-12 mt-56 ml-1/5 mr-1/5 -mb-16 rounded z-2 sm:ml-1/5 mr-1/5">
          <h3 className="text-5xl kessel-font text-center">New Rescue Centre</h3>
          <p className="mt-5 text-center">
            Here at PawHub HQ we are really seeing the effects of the corona-puppy-purchase surge,
            more and more of these lovely dogs are arriving at our doorstep and we are fast running out of space.
            With that in mind, PawHub are running the following fundraising events so we can build a new Rescue Centre for these pups:
          </p>
          <ul className="mt-5">
            <li className="list-disc">PawHub Cake Sale</li>
            <li className="list-disc">PawHub Pub Quiz</li>
            <li className="list-disc">Sponsored Dog Walk (lots)</li>
          </ul>
          <p className="mt-10 text-align-middle">
            If you want to help raise money in collaboration with PawHub please email the team at directly at <a className="underline" href="#">teampawhubsei@gmail.com</a> and we will be ready to assist.
          </p>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="fundraiser-mobile-view">
        <img src="https://i.imgur.com/Bm9jKXC.jpg?1" />
        <div className="m-10">
          <h3 className="text-5xl kessel-font text-center">New Rescue Centre</h3>
          <p className="mt-5">
            Here at PawHub HQ we are really seeing the effects of the corona-puppy-purchase surge,
            more and more of these lovely dogs are arriving at our doorstep and we are fast running out of space.
            With that in mind, PawHub are running the following fundraising events so we can build a new Rescue Centre for these pups:
          </p>
          <ul className="mt-5">
            <li className="list-disc">PawHub Cake Sale</li>
            <li className="list-disc">PawHub Pub Quiz</li>
            <li className="list-disc">Sponsored Dog Walk (lots)</li>
          </ul>
          <p className="mt-10 text-align-middle">
            If you want to help raise money in collaboration with PawHub please email the team at directly at <a className="underline" href="#">teampawhubsei@gmail.com</a> and we will be ready to assist.
          </p>
        </div>
      </div>
    </>
  )
}

export default Fundraiser