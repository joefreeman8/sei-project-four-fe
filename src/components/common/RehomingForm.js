function RehomingForm() {
  return (

    <><br></br>

      <div className="px-40">
        <p className="text-3xl font-bold">Rehoming Questionnaire </p>
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
        <p>If you have any questions, please call our Contact Centre team on 03050050000, or visit our website: https://www.pawhub.org.uk/rehoming/how-to-adopt/</p>

        <br></br>

        <form>
          <p className="text-xl text-gray-400">Section 1: Your Details</p>
          <p className="text-sm text-red-600">* <span className="text-gray-400">Required</span></p>
          <br></br>
          
          <div className="mb-6">

            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">1. Adopter Title<span className="text-red-600"> *</span></label>
            <select id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">2. Adopter First Name<span className="text-red-600"> *</span></label>
            <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">3. Adopter Surname<span className="text-red-600"> *</span></label>
            <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">4. Address<span className="text-red-600"> *</span></label>
            <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <label htmlFor="text" className="block text-sm font-medium text-gray-900 dark:text-gray-400">5. Telephone Number<span className="text-red-600"> *</span></label>
            <p className="text-xs italic text-gray-400 mb-2">Please enter one number with no spaces e.g. 02078370006</p>
            <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">6. Email<span className="text-red-600"> *</span></label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <p className="text-xl text-gray-400">Section 2: Home Environment</p>

            <br></br>

            <label htmlFor="text" className="block text-sm font-medium text-gray-900 dark:text-gray-400">7. Please state the name of dog you are applying for:<span className="text-red-600"> *</span></label>
            <p className="text-xs italic text-gray-400 mb-2">Please use the same spelling as on our website. You can include the breed too if we have more than one dog with the same name. </p>
            <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer"
              required/>

            <br></br>

            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">8. Is this the only dog you have seen on our website that might be a suitable match for you?<span className="text-red-600"> *</span></label>
            <select id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>This is the only dog I&apos;ve applied for</option>
              <option>I&apos;ve applied for a couple of dogs</option>
              <option>I&apos;ve seen quite a few dogs on the website that could be suitable</option>
            </select>

            <br></br>


            <fieldset>
              <label htmlFor="text" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">9. Is your home a:<span className="text-red-600"> *</span></label>
              <legend className="sr-only">Home</legend>

              <div className="flex items-center mb-0">
                <input id="home-option-1" type="radio" name="homeType" value="House" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-1" aria-describedby="home-option-1" checked/>
                <label htmlFor="home-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                House
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-2" type="radio" name="homeType" value="Bungalow" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-2" aria-describedby="home-option-2"/>
                <label htmlFor="home-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Bungalow
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-3" type="radio" name="homeType" value="Farm" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-3" aria-describedby="home-option-3"/>
                <label htmlFor="home-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Farm
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-4" type="radio" name="homeType" value="Caravan" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-4" aria-describedby="home-option-4"/>
                <label htmlFor="home-option-4" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Caravan
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-5" type="radio" name="homeType" value="Boat" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-5" aria-describedby="home-option-5"/>
                <label htmlFor="home-option-5" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Boat
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-6" type="radio" name="homeType" value="Flat" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-6" aria-describedby="home-option-6"/>
                <label htmlFor="home-option-6" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                First Floor or Above Flat
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-7" type="radio" name="homeType" value="GFlat" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-7" aria-describedby="home-option-7"/>
                <label htmlFor="home-option-7" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Ground Floor Flat
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-option-8" type="radio" name="homeType" value="Other" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="home-option-8" aria-describedby="home-option-8"/>
                <label htmlFor="home-option-8" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
                <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Other"
                  required/>
              </div>


              <br></br>


              <label htmlFor="text" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">10. Is your home:<span className="text-red-600"> *</span></label>
              <legend className="sr-only">Home</legend>

              <div className="flex items-center mb-0">
                <input id="home-owned" type="radio" name="homeStatus" value="Owned" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="owned" aria-describedby="owned" checked/>
                <label htmlFor="owned" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Owned
                </label>
              </div>

              <div className="flex items-center mb-0">
                <input id="home-rented" type="radio" name="homeStatus" value="Rented" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="rentedhome-option-2" aria-describedby="rented"/>
                <label htmlFor="rented" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Rented
                </label>
           
              </div>
              <span className="text-xs italic text-gray-400">Rentals - Please note, proof of landlord&apos;s permission required before reserving a dog (We&apos;ll explain how when we call you!)</span>
            </fieldset>




          </div>
        
          <div className="flex items-start mb-6"></div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>






        <div className="antialiased text-gray-900 px-6">
          <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
            <div className="py-8"></div>
            {/* <div className="py-12"> */}
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-1 gap-6">
                {/* <p className="text-sm text-red-600">* <span className="text-black">Required</span></p>
                <p className="text-xl">Section 1: Your Details</p> */}

                {/* <label className="block">
                  <span className="text-gray-700">1. Adopter Title</span>
                  <select className="text-xs block w-full mt-1 rounded-md bg-gray-100
                    border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Miss</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Master</option>
                    <option>Mr</option>
                    <option>Dr</option>
                    <option>Mx</option>
                    <option>Other</option>
                  </select>
                </label> */}

                {/* <label className="block">
                  <span className="text-gray-700">2. Adopter First Name</span>
                  <span className="text-red-600"> *</span>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter your answer"/>                   
                </label>

                <label className="block">
                  <span className="text-gray-700">3. Adopter Surname</span>
                  <span className="text-red-600"> *</span>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter your answer"/>
                </label>

                <label className="block">
                  <span className="text-gray-700">4. Address</span>
                  <span className="text-red-600"> *</span>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter your answer"/>
                </label> */}

                {/* <label className="block">
                  <span className="text-gray-700">5. Telephone Number</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">Please enter one number with no spaces e.g. 02078370006</p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter your answer"/>
                </label>

                <label className="block">
                  <span className="text-gray-700">6. Email</span>
                  <span className="text-red-600"> *</span>
                  <input type="email" className="text-xs mt-1 block w-full rounded-md bg-gray-100 
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter your answer"/>
                </label> */}

                {/* <p className="text-xl">Section 2: Home Environment</p> */}

                {/* <label className="block">
                  <span className="text-gray-700">7. Please state the name of dog you are applying for.</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">Please use the same spelling as on our website. You can include the breed too if we have more than one dog with the same name. </p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                    border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" 
                  placeholder="Enter your answer"/>                    
                </label> */}
                    
                {/* <label className="block">
                  <span className="text-gray-700">8. Is this the only dog you have seen on our website that might be a suitable match for you?</span>
                  <span className="text-red-600"> *</span>
                  <select className="text-xs block w-full mt-1 rounded-md bg-gray-100
                    border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>This is the only dog I&apos;ve applied for</option>
                    <option>I&apos;ve applied for a couple of dogs</option>
                    <option>I&apos;ve seen quite a few dogs on the website that could be suitable</option>
                  </select>
                </label> */}

                {/* <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">9. Is your home a: </span>
                    <span className="text-red-600"> *</span>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                        <option className="text-xs ml-2">House</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Bungalow</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Farm</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Caravan</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Boat</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">First Floor or Above Flat</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Ground Floor Flat</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">
                        </option>
                        <input type="text" className="text-xs mt-1 block w-full rounded-md 
                          bg-gray-100 border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0"
                        placeholder="Other"/>
                      </label>
                    </div>
                  </div>
                </div> */}

                {/* <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">10. Is your home: </span>
                    <span className="text-red-600"> *</span>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                        <option className="text-xs ml-2">Owned</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Rented</option> 
                      </label>
                      <span className="text-xs italic"> - Please note, you will need to show us proof of landlord&apos;s permission before you can reserve a dog (We&apos;ll explain how when we call you!)</span>
                    </div>
                  </div>
                </div> */}

                <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">11. Do you have a garden? </span>
                    <span className="text-red-600"> *</span>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                        <option className="text-xs ml-2">Yes, private garden</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <p className="text-xs ml-2">Yes, communal garden</p>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">No</option>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">12. If Yes, is the garden secure from escape? </span>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "/>
                        <option className="text-xs ml-2">Yes</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "/> 
                        <option className="text-xs ml-2">No</option>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">13. Is your home: </span>
                    <span className="text-red-600"> *</span>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                        <option className="text-xs ml-2">Busy - By this we mean a good amount of people coming in and out, maybe loud children or a general &apos;always on the go&apos; kind of atmosphere</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Moderate</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Quiet - By this we mean very few people coming and going, maybe quiet children, quite a calm, peaceful atmosphere</option>
                      </label>
                    </div>
                  </div>
                </div>

                <label className="block">
                  <span className="text-gray-700">14. How many adults live in your home?</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">Please include any young adults of 17 years old in this number</p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="The value must be a number"/>
                </label>

                <label className="block">
                  <span className="text-gray-700">15. How many children under 5 years old?</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">If you are planning on expanding your family in the future, please discuss this with a member of staff so we can find the best possible dog to match your circumstances and offer you the best advice on how to introduce your new family members. The last thing you want to do is take home a dog that doesn&apos;t like children!  </p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="The value must be a number"/>
                </label>

                <label className="block">
                  <span className="text-gray-700">16. How many children 5-11 years?</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">We classify these children as primary school age on our website</p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="The value must be a number"/>
                </label>

                <label className="block">
                  <span className="text-gray-700">17. How many children 12-16 years?</span>
                  <span className="text-red-600"> *</span>
                  <p className="text-xs italic">We classify these children as secondary school age on our website</p>
                  <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                      border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="The value must be a number"/>
                </label>

                <div className="block">
                  <div className="mt-2">
                    <span className="text-gray-700">18. Do you have visitors to your home?</span>
                    <span className="text-red-600"> *</span>
                    <p className="text-xs italic">select all that apply</p>
                    <div>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                        <option className="text-xs ml-2">Adult visit most days</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Occasional adult visits</option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Children under 11 years old visit most days </option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Children aged 12-16 years old visit most days </option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Occasional visits from children under 11 years old </option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">Occasional visits from children aged 12-16 years old old </option>
                      </label>
                      <br></br>
                      <label className="inline-flex items-center">
                        <input type="radio" className="rounded bg-gray-200 border-transparent
                          focus:border-transparent focus:bg-gray-200 text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                        <option className="text-xs ml-2">No children visit</option>
                      </label>

                      <div className="block">
                        <div className="mt-2">
                          <span className="text-gray-700">19. Do you have other pets? </span>
                          <span className="text-red-600"> *</span>
                          <div>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                              <option className="text-xs ml-2">None</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Dogs</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Cats</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Horses</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Small Furries</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700 
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Birds</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">Ground Floor Flat</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="checkbox" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">
                              </option>
                              <input type="text" className="
                                text-xs mt-1 block w-full rounded-md bg-gray-100 border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                              placeholder="Other"/>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="block">
                        <div className="mt-2">
                          <span className="text-gray-700">20. Are you planning a holiday or moving home in the next three months? </span>
                          <span className="text-red-600"> *</span>
                          <div>
                            <label className="inline-flex items-center">
                              <input type="radio" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                              <option className="text-xs ml-2">Yes</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="radio" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">No</option>
                            </label>
                          </div>
                        </div>
                      </div>
                      <br></br>
                        
                      <p className="text-xl bold">Section 3: Finding the right dog for you</p>
                        
                      <div className="block">
                        <div className="mt-2">
                          <span className="text-gray-700">21. Are you able to take on a dog that has extra veterinary costs due to a medical condition?</span>
                          <span className="text-red-600"> *</span>
                          <p className="text-gray-700 text-xs italic">We&apos;ll explain any medical conditions and be upfront about the costs you could expect before you adopt</p>
                          <div>
                            <label className="inline-flex items-center">
                              <input type="radio" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
                              <option className="text-xs ml-2">Yes</option>
                            </label>
                            <br></br>
                            <label className="inline-flex items-center">
                              <input type="radio" className="rounded bg-gray-200 border-transparent
                                focus:border-transparent focus:bg-gray-200 text-gray-700
                                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/> 
                              <option className="text-xs ml-2">No</option>
                            </label>
                          </div>
                        </div>
                      </div>
                      <br></br>

                      <label className="block">
                        <span className="text-gray-700">22. How many hours would your dog be left alone? (Day Time)</span>
                        <span className="text-red-600"> *</span>
                        <input type="text" className="text-xs mt-1 block w-full rounded-md bg-gray-100
                          border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                        placeholder="The value must be a number"/>                   
                      </label>


                        

                    </div>
                  </div>
                </div>



  
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>




      </div></>

  )
}

export default RehomingForm