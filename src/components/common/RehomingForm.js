function RehomingForm() {
  return (

    <div className="container min-w-full bg-pawhub-yellow">

      <div className="bg-pawhub-purple"> 
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">
          Home</a> &gt; <a href="/dogs" className="hover:underline">Rehoming</a> &gt; How Rehoming Works</p>
      </div>

      <section className="w-2/8 lg:w-full h-screen h-6/6 bg-rehomingHeader bg-cover bg-center"></section>

      {/* card starts here */}
      <div className="rehoming-questionnaire pb-0">
        <div className="-mt-96 bg-white shadow-xl rounded w-5/6 mx-auto px-5 p-5">
          <div className="px-5">
            <p className="text-3xl font-bold">How Rehoming Works </p>
            <br></br>
            <p> Thank you for your interest in adopting a dog from Pawhub. During the pandemic, we’ve operated a virtual rehoming process which has been really successful in finding our dogs their forever homes. To build on this success, we’ll be continuing virtual rehoming for the foreseeable future.</p>

            <br></br>

            <p className="text-1xl font-bold">HOW OUR REHOMING WORKS</p>
            <p>We want to find all our dogs their perfect family, so we need to know more about you, your lifestyle, and your home. To get started, please complete this homefinding questionnaire. Please note that If you are interested in multiple dogs a questionnaire is to be completed for each dog.</p>

            <br></br>

            <p className="text-1xl font-bold">WHAT HAPPENS WHEN YOU HAVE SUBMITTED YOUR QUESTIONNAIRE</p>
            <p>We’ll review your application, looking at how closely your lifestyle matches the needs of the dog. If you seem like a great fit, we may arrange a virtual home check. We may also invite you to an appointment to meet the dog at the rehoming centre. If we have lots of strong matches for the dog, then we’ll prioritise applications based on when we received them.</p>

            <p className="text-1xl font-semibold"> If you apply and don’t hear back from us within five days, we’re sorry to say your application hasn’t been successful this time.</p>

            <br></br>

            <p className="text-1xl font-bold">CONTACT US</p>

            <p className="text-base pt-5">If you have any questions, please call our Contact Centre team on 03050050000, or visit
              <span className="text-blue-500 "><a href="/rehoming"> here </a></span>to learn more on how to adopt a dog.</p>
          
          </div>
        </div>
      </div>



      {/* questionnaire starts here */}
      <div className="pt-1 pb-10">
        <br></br>

        <form className="bg-white shadow-xl rounded w-5/6 mx-auto mt-5 px-5 pt-5 pb-5">
          
          <p className="text-3xl text-black font-bold text-center pb-4">Rehoming Questionnaire</p>
          <div className="flex sm:flex-row flex-col">

            <div className="w-full md:w-1/2 md:lg-1/2 mb-6 mx-2 ">

              <p className="text-xl text-black">Section 1: Your Details</p>
              <p className="text-sm text-red-600">* <span className="text-black">Required</span></p>
              <br></br>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-black">
              1. Adopter Title<span className="text-red-600"> *</span></label>
              <select id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2 ">
                <option>Miss</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Master</option>
                <option>Mr</option>
                <option>Dr</option>
                <option>Mx</option>
                <option>Other</option>
              </select>

              <br></br>

              <label htmlFor="text" className="block mb- text-sm font-medium text-gray-900">
              2. Adopter First Name<span className="text-red-600"> *</span></label>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow ring-offset-2 ring-offset-pawhub-yellow focus:border-pawhub-yellow block w-full p-2" 
                placeholder="Enter your answer" required onnput="this.setCustomValidity('')" onInvalid="this.setCustomValidity('')" />

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              3. Adopter Surname<span className="text-red-600"> *</span></label>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"              
                placeholder="Enter your answer" required/>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              4. Address<span className="text-red-600"> *</span></label>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"                
                required/>

              <br></br>

              <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              5. Telephone Number<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">Please enter one number with no spaces e.g. 02078370006</p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="Enter your answer" required/>

              <br></br>

              <label htmlFor="email" className="block mb-0 text-sm font-medium text-gray-900">
              6. Email<span className="text-red-600"> *</span></label>
              <input type="email" id="email" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"                
                placeholder="Enter your answer" required/>

              <br></br>

              <p className="text-xl text-black">Section 2: Home Environment</p>

              <br></br>

              <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              7. Please state the name of dog you are applying for:<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">
              Please use the same spelling as on our website. You can include the breed too if we have more than one dog with the same name. </p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="Enter your answer"/>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              8. Is this the only dog you have seen on our website that might be a suitable match for you?<span className="text-red-600"> *</span></label>
              <select id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2">
                <option>This is the only dog I&apos;ve applied for</option>
                <option>I&apos;ve applied for a couple of dogs</option>
                <option>I&apos;ve seen quite a few dogs on the website that could be suitable</option>
              </select>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-black">
                9. Is your home a:<span className="text-red-600"> *</span></label>

                <div className="flex items-center mb-0">
                  <input id="home-option-1" type="radio" name="homeType" value="House" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-1" aria-describedby="home-option-1"/>
                  <label htmlFor="home-option-1" className="block ml-2 text-sm font-medium text-gray-900">
                House
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-2" type="radio" name="homeType" value="Bungalow" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-2" aria-describedby="home-option-2"/>
                  <label htmlFor="home-option-2" className="block ml-2 text-sm font-medium text-gray-900">
                Bungalow
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-3" type="radio" name="homeType" value="Farm"
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-3" aria-describedby="home-option-3"/>
                  <label htmlFor="home-option-3" className="block ml-2 text-sm font-medium text-gray-900">
                Farm
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-4" type="radio" name="homeType" value="Caravan" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-4" aria-describedby="home-option-4"/>
                  <label htmlFor="home-option-4" className="block ml-2 text-sm font-medium text-gray-900">
                Caravan
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-5" type="radio" name="homeType" value="Boat" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-5" aria-describedby="home-option-5"/>
                  <label htmlFor="home-option-5" className="block ml-2 text-sm font-medium text-gray-900">
                Boat
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-6" type="radio" name="homeType" value="Flat" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-6" aria-describedby="home-option-6"/>
                  <label htmlFor="home-option-6" className="block ml-2 text-sm font-medium text-gray-900">
                First Floor or Above Flat
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-7" type="radio" name="homeType" value="GFlat" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-7" aria-describedby="home-option-7"/>
                  <label htmlFor="home-option-7" className="block ml-2 text-sm font-medium text-gray-900">
                Ground Floor Flat
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-option-8" type="radio" name="homeType" value="Other" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-option-8" aria-describedby="home-option-8"/>
                  <label htmlFor="home-option-8" className="block ml-2 text-sm font-medium text-gray-900"></label>
                  <input type="text" id="text"               
                    className="bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
                  hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-1.5"   
                    placeholder="Other"/>
                </div>

                <br></br>

                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                10. Is your home:<span className="text-red-600"> *</span></label>

                <div className="flex items-center mb-0">
                  <input id="home-own" type="radio" name="homeStatus" value="Owned" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-own" aria-describedby="home-own"/>
                  <label htmlFor="home-own" className="block ml-2 text-sm font-medium text-gray-900">
                Owned
                  </label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="home-rent" type="radio" name="homeStatus" value="Rented" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                    aria-labelledby="home-rent" aria-describedby="home-rent"/>
                  <label htmlFor="home-rent" className="block ml-2 text-sm font-medium text-gray-900">
                Rented
                  </label>
                </div>
                <span className="text-xs italic text-black">
                Rentals - Please note, proof of landlord&apos;s permission required before reserving a dog (We&apos;ll explain how when we call you!)</span>
              </fieldset>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              11. Do you have a garden?<span className="text-red-600"> *</span></label>

              <div className="flex items-center mb-0">
                <input id="garden-option-1" type="radio" name="garden" value="private" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="garden-option-1" aria-describedby="garden-option-1"/>
                <label htmlFor="garden-option-1" className="block ml-2 text-sm font-medium text-gray-900">
            Yes, private garden
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="garden-option-2" type="radio" name="garden" value="communal" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="garden-option-2" aria-describedby="garden-option-2"/>
                <label htmlFor="garden-option-2" className="block ml-2 text-sm font-medium text-gray-900">
            Yes, communal garden
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="garden-option-3" type="radio" name="garden" value="None" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="garden-option-3" aria-describedby="garden-option-3"/>
                <label htmlFor="garden-option-3" className="block ml-2 text-sm font-medium text-gray-900">
            No
                </label>
              </div>
        
              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              12. If Yes, is the garden secure from escape?</label>
              <div className="flex items-center mb-0">
                <input id="garden-secure-1" type="radio" name="gardenS" value="secure" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="garden-option-1" aria-describedby="garden-secure-1"/>
                <label htmlFor="garden-secure-1" className="block ml-2 text-sm font-medium text-gray-900">
              Yes
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="garden-secure-2" type="radio" name="gardenS" value="notsecure" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="garden-option-2" aria-describedby="garden-secure-2"/>
                <label htmlFor="garden-secure-2" className="block ml-2 text-sm font-medium text-gray-900">
              No
                </label>
              </div>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              13. Is your home:<span className="text-red-600"> *</span></label>

              <div className="flex items-center mb-0">
                <input id="home-traffic-1" type="radio" name="home-traffic" value="busy" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="home-traffic-1" aria-describedby="home-traffic1"/>
                <label htmlFor="home-traffic-1" className="block ml-2 text-sm font-medium text-gray-900">
              Busy - By this we mean a good amount of people coming in and out, maybe loud children or a general &apos;always on the go&apos; kind of atmosphere
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-traffic-2" type="radio" name="home-traffic" value="moderate" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="home-traffic-2" aria-describedby="home-traffic-2"/>
                <label htmlFor="home-traffic-2" className="block ml-2 text-sm font-medium text-gray-900">
              Moderate
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-traffic-3" type="radio" name="home-traffic" value="quiet" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="home-traffic-3" aria-describedby="home-traffic-3"/>
                <label htmlFor="home-traffic-3" className="block ml-2 text-sm font-medium text-gray-900">
              Quiet - By this we mean very few people coming and going, maybe quiet children, quite a calm, peaceful atmosphere
                </label>
              </div>

              <br></br>

              <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              14. How many adults live in your home?<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">Please include any young adults of 17 years old in this number</p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="The value must be a number"
                required/>

              <br></br>

              <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              15. How many children under 5 years old?<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">If you are planning on expanding your family in the future, please discuss this with a member of staff so we can find the best possible dog to match your circumstances and offer you the best advice on how to introduce your new family members. The last thing you want to do is take home a dog that doesn&apos;t like children! </p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="The value must be a number"
                required/>

              <br></br>
            </div>

            <div className="w-full md:w-1/2 md:lg-1/2 mb-6 mx-3">
              <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              16. How many children 5-11 years?<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">We classify these children as primary school age on our website </p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="The value must be a number"
                required/>

              <br></br>

              <label htmlFor="text" className="block text-sm font-medium text-gray-900 ">
              17. How many children 12-16 years?<span className="text-red-600"> *</span></label>
              <p className="text-xs italic text-black mb-0">We classify these children as secondary school age on our website </p>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"                
                required/>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                18. Do you have visitors to your home?<span className="text-red-600"> *</span></label>
                <p className="text-xs italic text-black mb-0">select all that apply</p>
                <div className="flex items-center mb-0">
                  <input id="visitors-1" aria-describedby="visitors-1" type="checkbox" 

                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-1" className="ml-3 text-sm font-medium text-gray-900">Adult visit most days</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="visitors-2" aria-describedby="visitors-2" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-2" className="ml-3 text-sm font-medium text-gray-900">Occasional adult visits</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="visitors-3" aria-describedby="visitors-3" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-3" className="ml-3 text-sm font-medium text-gray-900">Children under 11 years old visit most days</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="visitors-4" aria-describedby="visitors-4" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-4" className="ml-3 text-sm font-medium text-gray-900">Occasional visits from children under 11 years old</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="visitors-5" aria-describedby="visitors-5" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-5" className="ml-3 text-sm font-medium text-gray-900">Occasional visits from children aged 12-16 years old</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="visitors-6" aria-describedby="visitors-6" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="visitors-6" className="ml-3 text-sm font-medium text-gray-900">No Children visit</label>
                </div>
              </fieldset>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                19. Do you have other pets?<span className="text-red-600"> *</span></label>
                <div className="flex items-center mb-0">
                  <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-1" className="ml-3 text-sm font-medium text-gray-900">None</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-2" className="ml-3 text-sm font-medium text-gray-900">Dogs</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-3" className="ml-3 text-sm font-medium text-gray-900">Cats</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-4" aria-describedby="checkbox-4" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-4" className="ml-3 text-sm font-medium text-gray-900">Horses</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-5" aria-describedby="checkbox-5" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-5" className="ml-3 text-sm font-medium text-gray-900">Small Furries</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-6" aria-describedby="checkbox-6" type="checkbox"
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-6" className="ml-3 text-sm font-medium text-gray-900">Birds</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="checkbox-7" aria-describedby="checkbox-7" type="checkbox" 
                    className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="checkbox-7" className="ml-3 text-sm font-medium text-gray-900"></label>
                  <input type="text" id="text" 
                    className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
                  hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-1.5"   
                    placeholder="Other"
                    required/>
                </div>
              </fieldset>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              20. Are you planning a holiday or moving home in the next three months?<span className="text-red-600"> *</span></label>

              <div className="flex items-center mb-0">
                <input id="away-option-1" type="radio" name="away-option" value="yes" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="away-option-1" aria-describedby="away-option-1"/>
                <label htmlFor="away-option-1" className="block ml-2 text-sm font-medium text-gray-900">
              Yes
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="away-option-2" type="radio" name="away-option" value="no" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="away-option-2" aria-describedby="away-option-2"/>
                <label htmlFor="away-option-2" className="block ml-2 text-sm font-medium text-gray-900">
              No
                </label>
              </div>
            
              <br></br>
            
              <p className="text-xl text-black">Section 3: Finding the right dog for you</p>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              21. Are you able to take on a dog that has extra veterinary costs due to a medical condition?<span className="text-red-600"> *</span></label>
              <p className="text-black text-xs italic">We&apos;ll explain any medical conditions and be upfront about the costs you could expect before you adopt</p>

              <div className="flex items-center mb-0">
                <input id="vet-costs-option-1" type="radio" name="vetCosts" value="Yes" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="vet-costs-option-1" aria-describedby="vet-costs-option-1"/>
                <label htmlFor="vet-costs-option-1" className="block ml-2 text-sm font-medium text-gray-900">
              Yes
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="vet-costs-option-2" type="radio" name="vetCosts" value="No" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="vet-costs-option-2" aria-describedby="vet-costs-option-2"/>
                <label htmlFor="vet-costs-option-2" className="block ml-2 text-sm font-medium text-gray-900">
              No
                </label>
              </div>

              <br></br>

              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
              22. How many hours would your dog be left alone? (Day Time)<span className="text-red-600"> *</span></label>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="The value must be a number" required/>

              <br></br>

              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
              23. How many hours would your dog be left alone? (Night Time)<span className="text-red-600"> *</span></label>
              <input type="text" id="text" 
                className="cursor-pointer bg-white shadow rounded border border-black text-gray-900 text-sm rounded-lg 
              hover:border-pawhub-yellow focus:border-pawhub-yellow block w-full p-2"  
                placeholder="The value must be a number" required/>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              24. Would this be continuous or would there be breaks?<span className="text-red-600"> *</span></label>
              <p className="text-black text-xs italic mb-0">We&apos;ll explain any medical conditions and be upfront about the costs you could expect before you adopt</p>

              <div className="flex items-center mb-0">
                <input id="alone-option-1" type="radio" name="alone-time" value="Yes" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="alone-option-1" aria-describedby="alone-option-1"/>
                <label htmlFor="alone-option-1" className="block ml-2 text-sm font-medium text-gray-900">
              Continuous
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="alone-option-2" type="radio" name="alone-time" value="Yes" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="alone-option-2" aria-describedby="alone-option-2"/>
                <label htmlFor="alone-option-2" className="block ml-2 text-sm font-medium text-gray-900">
              Breaks
                </label>
              </div>

              <br></br>

              <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
              25. Are you planning on taking your dog to work with you?<span className="text-red-600"> *</span></label>

              <div className="flex items-center mb-0">
                <input id="work-option-1" type="radio" name="work" value="Yes" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="work-option-1" aria-describedby="work-option-1"/>
                <label htmlFor="work-option-1" className="block ml-2 text-sm font-medium text-gray-900">
              Yes
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="work-option-2" type="radio" name="work" value="No" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow" 
                  aria-labelledby="work-option-2" aria-describedby="work-option-2"/>
                <label htmlFor="work-option-2" className="block ml-2 text-sm font-medium text-gray-900">
              No
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="work-option-3" type="radio" name="work" value="Possibly" 
                  className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"
                  aria-labelledby="work-option-3" aria-describedby="work-option-3"/>
                <label htmlFor="work-option-3" className="block ml-2 text-sm font-medium text-gray-900">
              Possibly
                </label>
              </div>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                  26. Have you owned a dog previously?<span className="text-red-600"> *</span></label>
                <div className="flex items-center mb-0">
                  <input id="owned-before-1" aria-describedby="owned-before-1" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="owned-before-1" className="ml-3 text-sm font-medium text-gray-900">As a child</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="owned-before-2" aria-describedby="owned-before-2" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="owned-before-2" className="ml-3 text-sm font-medium text-gray-900">As an adult</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="owned-before-3" aria-describedby="owned-before-3" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="owned-before-3" className="ml-3 text-sm font-medium text-gray-900">No</label>
                </div>              
              </fieldset>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                27. What dog size are you looking for?<span className="text-red-600"> *</span></label>
                <p className="text-black text-xs italic mb-0">Select all the apply</p>
                <div className="flex items-center mb-0">
                  <input id="size-option-1" aria-describedby="size-option-1" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="size-option-1" className="ml-3 text-sm font-medium text-gray-900">Small</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="size-option-2" aria-describedby="size-option-2" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="size-option-2" className="ml-3 text-sm font-medium text-gray-900">Medium</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="size-option-3" aria-describedby="size-option-3" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="size-option-3" className="ml-3 text-sm font-medium text-gray-900">Large</label>
                </div>              
              </fieldset>

              <br></br>

              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                28. What gender of dog are you looking for?<span className="text-red-600"> *</span></label>
                <p className="text-black text-xs italic mb-0">Select all the apply</p>
                <div className="flex items-center mb-0">
                  <input id="gender-option-1" aria-describedby="gender-option-1" type="checkbox" className="cursor-pointer w-4 h-4 text-pawhub-yellow rounded border-black focus:border-pawhub-yellow focus:ring-2 "/>
                  <label htmlFor="gender-option-1" className="ml-3 text-sm font-medium text-gray-900">Male</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="gender-option-2" aria-describedby="gender-option-2" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="gender-option-2" className="ml-3 text-sm font-medium text-gray-900">Female</label>
                </div>
              </fieldset>
          
              <br></br>
          
              <fieldset>
                <label htmlFor="text" className="block mb-0 text-sm font-medium text-gray-900">
                29. What age dog are you looking for?<span className="text-red-600"> *</span></label>
                <p className="text-black text-xs italic mb-0">Select all the apply</p>
                <div className="flex items-center mb-0">
                  <input id="age-option-1" aria-describedby="age-option-1" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="age-option-1" className="ml-3 text-sm font-medium text-gray-900">Under 6 months</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="age-option-2" aria-describedby="age-option-2" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="age-option-2" className="ml-3 text-sm font-medium text-gray-900">6-18 months</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="age-option-3" aria-describedby="age-option-3" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="age-option-3" className="ml-3 text-sm font-medium text-gray-900">18 months plus</label>
                </div>

                <div className="flex items-center mb-0">
                  <input id="age-option-4" aria-describedby="age-option-2" type="checkbox" className="cursor-pointer w-4 h-4 focus:outline-none transition duration-400 focus:ring-2 focus:ring-pawhub-yellow accent-pawhub-yellow"/>
                  <label htmlFor="age-option-4" className="ml-3 text-sm font-medium text-gray-900">Golden oldie (10 years +)</label>
                </div>
              </fieldset>

              {/* <button type="submit" 
                className="mt-5 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-pawhub-yellow font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                  Submit</button>           */}

              <div className="flex justify-center pt-3 pb-5">
                <button type="submit" 
                  className="shadow-xl bg-pawhub-purple text-white font-bold py-2 px-8 m-3 
                    rounded hover:bg-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey 
                    border-2 border-pawhub-purple">Submit Form</button>
              </div>


            </div>
        
          </div>
        </form>

      </div>

      

    </div>


  )
}

export default RehomingForm