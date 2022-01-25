import Carousel from './carousel/HomeCarousel'
import DogHomeCard from '../dogs/DogCard'

import { getAllDogs, shuffle } from '../../lib/api'

import React from 'react'


function Home() {

  const [dogs, setDogs] = React.useState(null)
  const [isNext, setIsNext] = React.useState(false)
  const [dogsToShow, setDogsToShow] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllDogs()
        setDogs(shuffle(data))
        setDogsToShow(data.slice(0, 5))
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  const moveDogs = () => {
    if (dogs) {
      isNext ? setDogsToShow(dogs.slice(6, 11)) : setDogsToShow(dogs.slice(0, 5))
      setIsNext(!isNext)
    } else {
      return
    }
  }

  dogs ? dogs.slice(0, 5) : null

  console.log(dogsToShow)

  return (
    <div className="container h-screen w-full bg-stone-400 mx-auto">
      <div className="w-full h-5/6 sm:h2/5 border-2 border-black flex flex-col lg:flex-row">
        <div className="h-full w-full bg-center bg-cover home-header"></div>
        <div className="bg-pawhub-yellow h-2/6 w-full  lg:h-full lg:w-1/3 text-xl text-center p-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
          I spend all day looking out this window, wondering if I&apos;ll ever be loved again
          <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w:fit lg:w-2/6 mt-5">
            Dogs for adoption
          </button>
        </div>
      </div>

      {/* Donate portion */}
      <div className="flex flex-col items-center bg-pawhub-stone pb-10">
        <h3 className="gooddog-font text-6xl">Donate Today</h3>
        <p>Welcome a sponsor dog into your life</p>
        <Carousel />
        <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w-2/6 mt-5">
          Donate
        </button>
      </div>
      <div className="flex flex-col items-center bgwhite pb-10">
        <h3 className="gooddog-font text-6xl">Adopt A Dog</h3>
        <p>Give one of our dogs a forever home</p>
        <div className="flex flex-row">

        </div>
        <div className="w-full flex flex-row">
          <button onClick={moveDogs}>Previous</button>
          {dogs && (
            dogsToShow.map(dog =>
              <DogHomeCard key={dog._id} {...dog} />
            )
          )}
          <button onClick={moveDogs}>Next</button>
        </div>
        <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w-2/6 mt-5">
          See our Dogs
        </button>
      </div>
      <div className="w-full h-1/3 bg-pawhub-yellow flex justify-center items-center">
        <Carousel />
      </div>

    </div>

  )
}

export default Home