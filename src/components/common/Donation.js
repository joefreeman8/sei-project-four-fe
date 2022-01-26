import React from 'react'

function Donation() {
  return (


    <div className="container min-w-full">

      <section className="w-2/8 lg:w-full h-screen h-1/6 bg-donationHeader bg-cover bg-center -mt-36"></section>
      <div className="bg-donationTile bg-repeat-round h-screen">
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

                <div className ="text-center donate-buttons flex items-stretch">

                  <button className="mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-1/3 mx-3 mt-5">
                £30
                  </button>

                  <button className="mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-1/3 mx-3 mt-5">
                £50
                  </button> 

                  <button className="mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-1/3 mx-3 mt-5">
                £100
                  </button> 

                </div>
                <p className="slant-text text-center text kessel-font mt-3 -rotate-6 ">Most Popular</p>

                <p className="text-base mt-4 mb-2"><span className="text-lg font-bold">£30</span> could go toward giving our dogs the vaccinations they need to stay healthy</p>

                <p className="text-base mt-2 mb-2"><span className="text-lg font-bold">£50</span> could provide a special heat pad to keep our dogs warm during surgery</p>

                <p className="text-base mt-2 mb-2"><span className="text-lg font-bold">£100</span> pays for all of the care a dog needs in their first week with us</p>



                <label htmlFor="text" className="block mt-5 ml-3 text-base text-center">Or enter your own amount below...</label>
                <input type="text" id="text" className="border-none text-black text-sm rounded-lg block w-full py-3 mr-3 text-center placeholder-gray-400 dark:text-black text-xl" placeholder="£100"
                  required/>


              </form>
              <button className="content-centermx-auto font-black bg-pawhub-yellow hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-pawhub-yellow h-12 w-full mr-3 mt-5">
                Next 
              </button> 
            </div>
  
          </div>
        </div>
      </div>        
    </div>

    
    

  )
}

export default Donation