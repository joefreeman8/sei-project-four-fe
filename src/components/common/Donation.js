import React from 'react'
// import backgroundImage from '../../assets/Pawprint-Background.png'

function Donation() {
  return (

  // <div className="container min-w-full bg-pawhub-yellow">
  //   <section className="w-2/8 lg:w-full h-screen h-1/6 bg-rehomingHeader bg-cover bg-center -mt-40"></section>

  // <section className="lg:w-full h-screen h-1/6 bg-donationTile bg-repeat bg-center">

    <div className="container min-w-full">
      <section className="w-2/8 lg:w-full h-screen h-1/6 bg-donationHeader bg-cover bg-center -mt-36"></section>
      
      {/* card starts here */}

      <div className="Donate-container float-left pl-1/5 pr-1/5">
        <div className="-mt-60 bg-white shadow-xl rounded w-5/6 mx-auto px-5 p-5">
          <p className="text-3xl font-semibold pb-4">Donate Now</p>
          <p className="text-base">Your kind donations help us provide life changing care and forever homes for over 14,000 of our furry friends.</p>
          <br></br>
          <p className="text-base">We really appreciate your support (and we know the dogs do too!)</p>


          <div className="donate-form">
            <form className="bg-pawhub-stone mt-5 px-5 pt-10 pb-10">
              <p className="text kessel-font text-center">How much would you like to donate?</p>  
              <div className ="text-center donate-buttons inline-flex block items-center">
                <button className="block mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-20 mx-3 mt-5">
                £30
                </button>

                <button className="block mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-20 mx-3 mt-5">
                £50
                </button> 

                <button className="block mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-20 mx-3 mt-5">
                £100
                </button> 

              </div>
              <p className="slant-text text-center mt-5 -rotate-6">Most Popular</p>
            </form>
          </div>
  
        </div>
      </div>
        
    </div>
    // </section>
    
    

  )
}

export default Donation