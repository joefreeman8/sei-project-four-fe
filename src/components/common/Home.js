import Carousel from './carousel/HomeCarousel'
import DivCarousel from './carousel/DivCarousel'
import DogHomeCard from '../dogs/DogCard'

import { getAllDogs, shuffle } from '../../lib/api'
import { homepageCards } from '../../lib/data'

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
    <div className="container h-screen w-full mx-auto">
      <div className="w-full h-4/6 sm:h2/5 flex flex-col lg:flex-row">
        <div className="h-full w-full bg-center bg-cover home-header"></div>
        <div className="bg-pawhub-yellow h-2/6 w-full lg:h-full lg:w-1/3 text-xl text-center p-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <p>I spend all day looking out this window, wondering if I&apos;ll ever be loved again</p>
          <button className="bg-pawhub-grey rounded-md text-white text-2xl w-auto h-auto p-7 mt-5 hover:bg-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey">
            Dogs for adoption
          </button>
        </div>
      </div>

      {/* Donate portion */}
      <div className="flex flex-col items-center bg-pawhub-stone pb-10">
        <h3 className="kessel-font m-5 text-6xl">Donate Today</h3>
        <p>Every penny will help a dog in need</p>
        <Carousel />
        <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w-2/6 mt-5 hover:bg-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey">
          Donate
        </button>
      </div>
      <div className="flex flex-col items-center bgwhite pb-10">
        <h3 className="kessel-font text-6xl m-5">Adopt A Dog</h3>
        <p>These are just 10 of the {dogs && <span className='font-bold'>{dogs.length}</span>} dogs that need a forver home</p>
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
        <button className="block mx-auto bg-pawhub-grey hover:bg-white rounded-md text-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey h-16 w-2/6 mt-5">
          See our Dogs
        </button>
      </div>
      <div className="w-full h-1/3 bg-pawhub-yellow flex justify-center items-center">
        <DivCarousel {...homepageCards} />
      </div>

    </div>

  )
}

export default Home