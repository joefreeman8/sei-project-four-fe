import React from 'react'

function Donation() {
  const [donationValue, setDonationValue] = React.useState('£')
  const [hasDonated, setHasDonated] = React.useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value.charAt(0) === '£') {
      setDonationValue('£' + e.target.value.substring(1))
    } else {
      setDonationValue('£' + e.target.value)
    }
  }

  const handleDonation = (e) => {
    e.preventDefault()
    if (parseFloat(donationValue.substring(1))) {
      setHasDonated(true)
    }
  }

  return (

    <div className="container min-w-full">

      <div className="bg-pawhub-purple"> 
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; Donate Now</p>
      </div>

      {/* sm:w-11/12 md:w-7/12 lg:w-5/12 xl:w-5/12 mx-auto px-6 */}

      
      <section className="w-4/7 lg:w-screen h-screen bg-donationHeader bg-cover bg-center">
        

        {/* card starts here */}
        <div className="Donate-container pt-5 pl-5 pr-5 sm:w-px-1">
          <div className="mt-0 bg-white shadow-xl rounded float-left px-5 p-5 sm:w-px-1">
            <p className="text-3xl font-semibold pt-2 pb-1">Donate Now</p>
            <p className="text-base">Your kind donations help us provide life changing care and forever homes for over 14,000 of our furry friends.</p>
            <p className="text-base">We really appreciate your support (and we know the dogs do too!)</p>

            <div className="donate-form">
              {!hasDonated ?
                <>
                  <form className="bg-pawhub-stone mt-5 px-5 pt-5 pb-5">
                    <p className="text kessel-font text-center">How much would you like to donate?</p>  

                    <div className ="text-center donate-buttons flex items-stretch">

                      <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-3" value='£30' onClick={handleClick}>
                      £ 30
                      </button>

                      <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-3" value='£50' onClick={handleClick}>
                      £ 50
                      </button> 

                      <button className="shadow-xl mx-auto font-black bg-white hover:bg-pawhub-grey rounded-md text-black hover:text-white h-12 w-1/3 mx-3 mt-3" value='£100' onClick={handleClick}>
                      £ 100
                      </button> 

                    </div>
                    <p className="slant-text text-center text kessel-font mt-3 -rotate-6 ">Most Popular</p>

                    <p className="text-center text-sm mt-2 mb-0 -py-4"><span className="text-lg font-bold">£30</span> could go toward giving our dogs the vaccinations they need to stay healthy</p>

                    <p className="text-center text-sm mt-0 mb-0 -py-4"><span className="text-lg font-bold">£50</span> could provide a special heat pad to keep our dogs warm during surgery</p>

                    <p className="text-center text-sm mt-0 mb-0 -py-4"><span className="text-lg font-bold">£100</span> pays for all of the care a dog needs in their first week with us</p>

                    <label htmlFor="text" className="block mt-2 mb-1 ml-3 text-sm -pb-2 text-center">Or enter your own amount below...</label>
                    <input type="text" id="text" className="shadow border-2 text-gray-700 text-sm rounded-lg block w-full py-3  text-center text-lg leading-tight focus:outline-none focus:border-pawhub-yellow placeholder-gray-400" placeholder="£100" value={donationValue} onChange={handleClick}
                      required/>

                  </form>
                  <button className="content-center mx-auto font-black bg-pawhub-yellow hover:bg-pawhub-grey rounded-md text-black hover:text-white hover:border-2 hover:border-white h-12 w-full mr-3 mt-5 shadow-xl" type="submit" onClick={handleDonation}>
                Donate  
                  </button> 
                </>
                :
                <div className="bg-pawhub-stone mt-5 p-10">
                  <h1 className="kessel-font">Thank you for your donation of {donationValue}!</h1>
                </div>  

              }

            </div>
    
          </div>

        
        </div>
        
      </section>   

    </div>    


    

    
    

  )
}

export default Donation