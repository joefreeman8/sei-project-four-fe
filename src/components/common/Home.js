// import Carousel from './carousel/HomeCarousel'
import DivCarousel from './carousel/DivCarousel'
import DogHomeCard from '../dogs/DogCard'
import Error from './Error'

import { getAllDogs, shuffle } from '../../lib/api'
import { homepageCards } from '../../lib/data'

import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Loading from './Loading'
import DonateImageGallery from './carousel/DonateImageGallery'


function Home() {

  const [dogs, setDogs] = React.useState(null)
  const [isNext, setIsNext] = React.useState(false)
  const [dogsToShow, setDogsToShow] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [error, setError] = React.useState(null)
  const isLoading = !dogs || !dogsToShow && !isError


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
    <>
      {isLoading && !isError && <Loading />}
      {isError &&
        <div className="bg-black h-screen">
          <Error error={error} />
        </div>
      }
      {dogs && !isError &&
        <><div className="container h-full w-full mx-auto">
          <div className="w-full h-5/6 sm:h2/5 flex flex-col lg:flex-row">
            <div className="h-96 w-full bg-center bg-cover home-header"></div>
            <div className="bg-pawhub-yellow h-auto w-full lg:w-1/3 text-xl text-center p-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
              <p>I spend all day looking out this window, wondering if I&apos;ll ever be loved again</p>
              <Link to="/dogs">
                <button className="bg-pawhub-grey rounded-md text-white text-2xl w-auto h-auto p-7 mt-5 hover:bg-white hover:text-pawhub-grey border-2 border-pawhub-grey">
                  Dogs for adoption
                </button>
              </Link>
            </div>
          </div>

          {/* Donate section */}
          <div className="flex flex-col items-center bg-pawhub-stone pb-5">
            <h3 className="kessel-font m-5 text-6xl">Donate Today</h3>
            <p className='mb-5'>Every penny will help a dog in need</p>
            {/* <Carousel /> */}
            <DonateImageGallery />

            <Link to="/donation" className="pb-10">
              <button className="block mx-auto bg-pawhub-grey rounded-md text-white h-16 w-64 mt-5 hover:bg-white hover:text-pawhub-grey border-2 border-pawhub-grey">
                Donate
              </button>
            </Link>
          </div>
          {/* dog section */}
          <div className="flex flex-col items-center bg-white pb-10">
            <h3 className="kessel-font text-6xl m-5">Adopt A Dog</h3>
            <p>These are just a few of the <span className='font-bold'>{dogs.length}</span> dogs that need a forever home</p>
            <div className="flex flex-row">

            </div>
            <div className="w-full flex flex-col md:flex-row">
              <button className='invisible md:visible'><AiOutlineLeft onClick={moveDogs} className='text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='left' /></button>

              {dogsToShow.map(dog => <DogHomeCard key={dog.id} {...dog} />
              )}

              <button className="invisible md:visible"> <AiOutlineRight onClick={moveDogs} className='text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='right' /> </button>

            </div>
            <Link to="/dogs">
              <button className="block mx-auto bg-pawhub-grey hover:bg-white rounded-md text-white hover:text-pawhub-grey border-2 border-pawhub-grey h-16 w-64 mt-5">
                See our Dogs
              </button>
            </Link>
          </div>
        </div><div className="w-full h-1/3 bg-pawhub-yellow flex justify-center items-center">
          <DivCarousel {...homepageCards} />
        </div></>
      }
    </>


  )
}

export default Home