// import { Link } from 'react-router-dom'

function Rehoming() {
  return (
    <div className="bg-donationTile bg-repeat h-full pb-10">
      <div className="bg-pawhub-purple"> 
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/dogs" className="hover:underline">Rehoming</a> &gt; How Rehoming Works</p>
      </div>

      {/* <div className="mt-5 mb-0 pb-16 bg-white shadow-xl rounded w-5/6 mx-auto px-6 "> */}
      <div className="mt-5 mb-0 pb-16 bg-white shadow-xl rounded sm:w-11/12 md:w-7/12 lg:w-5/12 xl:w-5/12 mx-auto px-6">

        <p className="text-6xl text-pawhub-grey font-bold text-center p-8">How to adopt a dog</p>

        <p className="text-lg">Are you thinking about adopting one of our dogs? That&apos;s great! Start your journey today</p>
        <br></br>
        <hr></hr>

        <p className="text-3xl mt-5">Steps to rehoming a rescue dog</p>   
      
        <p className="text-lg font-bold pt-5">1. Browse available dogs</p>
        <div className="grid place-items-center h-3/6">
          <img src={'https://i.imgur.com/uK3jMat.png'} />
        </div>
        <p className="text-base pt-5">Take a look at the 
          <span className="text-blue-500"><a href="/dogs"> dogs available for adoption</a></span>.</p>

        <p className="text-lg font-bold pt-5">2. Found one you like?</p>
        <div className="grid place-items-center h-3/6">
          <img src={'https://i.imgur.com/zCcjH2c.png'} />
        </div>
        <p className="text-base pt-0">If you&apos;ve found a dog who looks like a good match for you, click the &apos;rehoming me starts here&apos; button on their profile and fill in an application form.</p>
        
        <p className="text-lg font-bold pt-5">3. We&apos;ll review your application</p>

        <p className="text-base pt-5">Our team will read your application and see if your lifestyle matches the needs of the dog.</p>
      
        <p className="text-lg font-bold pt-5">4. We&apos;ll arrange an appointment</p>
        <div className="grid place-items-center h-3/6">
          <img src={'https://i.imgur.com/4J0Q2Sr.png'} />
        </div>
        
        <p className="text-base pt-5">If you and the dog seem well suited, we may arrange a virtual home check or an appointment for you to come and meet them at the centre.</p>

        <p className="text-lg font-bold pt-5">5. The perfect match</p>
        <div className="grid place-items-center h-3/6">
          <img src={'https://i.imgur.com/1H7xX3T.png'} />
        </div>

        <p className="text-lg font-bold pt-5">6. Keep in touch</p>
        <div className="grid place-items-center h-3/6">
          <img src={'https://i.imgur.com/DDifn1m.png'} />
        </div>
      
        <p className="text-base pt-5">We&apos;ll keep in touch to see how you and the dog are doing. If you need any advice or support, we&apos;re just a phone call away.</p>

        <div className="flex justify-around pt-5 flex-col lg:flex-row md:flex-row sm:flex-row">
          <a href="/rehomingform" className="flex justify-around xs:items-center">
            <button className="shadow-xl bg-pawhub-purple hover:bg-pawhub-purple/50 text-white font-bold py-2 px-4 m-3 rounded">Rehoming Questionnaire</button>
          </a>
          <a href="/dogs" className="flex justify-around xs:items-center">
            <button className="shadow-xl bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">Browse available dogs</button>
          </a>
        </div>

      </div>
    </div>




  )

}

export default Rehoming
