import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/banner.png'
import boneIcon from '../../../assets/boneIcon.png'

function AboutUs() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font" id="title">About Us</h1>
        <p className="image-text text-lg mt-5" id="aboutus-tagline">
          Our mission is to bring about the day when all dogs can enjoy a happy <br />
          life, free from the threat of unnecessary destruction.</p>
        <img src={banner} className="background-image" />
      </div>
      <div className="flex justify-center shadow-xl rounded w-full px-5 py-10 mt-20 bg-pawhub-purple">
        <div className="">
          <Link to="/aboutus/whoweare">
            <button className="mx-20 shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-5 px-10 m-3 rounded">
              Who We Are
            </button>
          </Link>
          <Link to="/aboutus/fundraiser">
            <button className="mx-20 shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-5 px-10 m-3 rounded">
              Fundraiser
            </button>
          </Link>
        </div>
      </div>

      <div className="container min-w-full mt-20">
        <div className="flex justify-center">
          <img src={boneIcon} className="h-10 w-10 flex justify-center" />
        </div>
        <h4 className="text-3xl text-bold text-center kessel-font">Help provide life changing care</h4>
        <div className="">
          <p className="text-center text-wrap mx-20">We receive no direct government funding and rely on the generosity of our supporters to help us achieve our mission.
            <br />
            <br />
            Money raised is used to invest in our fantastic rehoming centres so that they can continue to be there for the nations dogs&apos;; to fund
            preventative work to help protect dogs in the future; and to invest in, develop and promote information to help dog owners understand
            the needs of their pooch pals.
            <br />
            <br />
            Help provide life changing care and forever homes for our furry friends.</p>
        </div>
        <div className="flex justify-center">
          <Link to="/donation">
            <button className="mx-20 shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-10 m-3 rounded">
              Make Donation
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AboutUs