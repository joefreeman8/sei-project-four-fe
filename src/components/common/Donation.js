import React from 'react'

function Donation() {
  return (

    <div className="container min-w-full">

      <div className="bg-pawhub-purple"> 
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; Donate Now</p>
      </div>

      {/* sm:w-11/12 md:w-7/12 lg:w-5/12 xl:w-5/12 mx-auto px-6 */}
      <div className="bg-donationTile bg-repeat-round h-screen">
        <section className="w-2/7 lg:w-full h-screen bg-donationHeader bg-cover bg-center">
        

          {/* card starts here */}
          <div className="Donate-container float-left pl-1/5 pr-1/5">
            <div className="mt-16 bg-white shadow-xl rounded w-5/6 mx-auto px-5 p-5">

              <p className="text-3xl font-semibold pt-4 pb-4">Donate Now</p>
              <p className="text-base">Your kind donations help us provide life changing care and forever homes for over 14,000 of our furry friends.</p>
              <br></br>
              <p className="text-base">We really appreciate your support (and we know the dogs do too!)</p>

              <div className="donate-form">
                <form className="bg-pawhub-stone mt-5 px-5 pt-10 pb-5">
                  <p className="text kessel-font text-center">How much would you like to donate?</p>  

                  <div className ="text-center donate-buttons flex items-stretch">

                    <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-5 clicked:bg-blue-500">
                £30
                    </button>

                    <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-5">
                £50
                    </button> 

                    <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-5">
                £100
                    </button> 

                  </div>
                  <p className="slant-text text-center text kessel-font mt-3 -rotate-6 ">Most Popular</p>

                  <p className="text-base mt-4 mb-2"><span className="text-lg font-bold">£30</span> could go toward giving our dogs the vaccinations they need to stay healthy</p>

                  <p className="text-base mt-2 mb-2"><span className="text-lg font-bold">£50</span> could provide a special heat pad to keep our dogs warm during surgery</p>

                  <p className="text-base mt-2 mb-2"><span className="text-lg font-bold">£100</span> pays for all of the care a dog needs in their first week with us</p>



                  <label htmlFor="text" className="block mt-5 mb-2 ml-3 text-base text-center">Or enter your own amount below...</label>
                  
                  <input type="text" id="text" className="shadow border-2 text-gray-700 text-sm rounded-lg block w-full py-3  text-center leading-tight focus:outline-none focus:border-pawhub-yellow placeholder-gray-400" placeholder="£100"
                    required/>

                  {/* <input className="shadow border-2 h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5"  */}


                </form>
                <button className="content-center mx-auto font-black bg-pawhub-yellow hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-white h-12 w-full mr-3 mt-5 shadow-xl" type="submit">
                Next  
                </button> 
              </div>
    
            </div>
          </div>
        

        </section>   
      </div>    
    </div>

    

    
    

  )
}

export default Donation