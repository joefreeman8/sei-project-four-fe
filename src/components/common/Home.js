import Carousel from './carousel/HomeCarousel'
import DivCarousel from './carousel/DivCarousel'
import DogHomeCard from '../dogs/DogCard'
import Error from './Error'

import { getAllDogs, shuffle } from '../../lib/api'
import { homepageCards } from '../../lib/data'

import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


function Home() {

  const [dogs, setDogs] = React.useState(null)
  const [isNext, setIsNext] = React.useState(false)
  const [dogsToShow, setDogsToShow] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllDogs()
        setDogs(shuffle(data))
        setDogsToShow(data.slice(0, 5))
      } catch (err) {
        setError(err.response.status.toString())
        setIsError(true)
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
    <div className="container h-full w-full mx-auto">
      <div className="w-full h-5/6 sm:h2/5 flex flex-col lg:flex-row">
        <div className="h-96 w-full bg-center bg-cover home-header"></div>
        <div className="bg-pawhub-yellow h-auto w-full lg:w-1/3 text-xl text-center p-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <p>I spend all day looking out this window, wondering if I&apos;ll ever be loved again</p>
          <Link to="/dogs">
            <button className="bg-pawhub-grey rounded-md text-white text-2xl w-auto h-auto p-7 mt-5 hover:bg-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey">
              Dogs for adoption
            </button>
          </Link>
        </div>
      </div>

      {/* Donate portion */}
      <div className="flex flex-col items-center bg-pawhub-stone pb-10">
        <h3 className="kessel-font m-5 text-6xl">Donate Today</h3>
        <p>Every penny will help a dog in need</p>
        <Carousel />

        <Link to="/donation">
          <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w-64 mt-5 hover:bg-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey">
            Donate
          </button>
        </Link>
      </div>
      {isError && <Error error={error} />}
      {dogs && !isError &&
        <div className="flex flex-col items-center bgwhite pb-10">
          <h3 className="kessel-font text-6xl m-5">Adopt A Dog</h3>
          <p>These are just 10 of the <span className='font-bold'>{dogs.length}</span> dogs that need a forver home</p>
          <div className="flex flex-row">

          </div>
          <div className="w-full flex object-contain flex-row">
            <button><AiOutlineLeft onClick={moveDogs} className='text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='left' /></button>

            {dogsToShow.map(dog =>
              <DogHomeCard key={dog.id} {...dog} />
            )}

            <button> <AiOutlineRight onClick={moveDogs} className='text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='right' /> </button>

          </div>
          <Link to="/dogs">
            <button className="block mx-auto bg-pawhub-grey hover:bg-white rounded-md text-white hover:text-pawhub-grey hover:border-2 hover:border-pawhub-grey h-16 w-64 mt-5">
              See our Dogs
            </button>
          </Link>
        </div>
      }

      <div className="w-full h-1/3 bg-pawhub-yellow flex justify-center items-center">
        <DivCarousel {...homepageCards} />
      </div>

    </div>

  )
}

export default Home