import React from 'react'
import { useParams } from 'react-router'
import { favoriteDog, getSingleDog, removeFavorite } from '../../lib/api'
import Carousel from './Carousel'

import dogPaw from '../../assets/dog-paw.png'
import cat from '../../assets/cat.png'
import baby from '../../assets/baby.png'
import emptyHeart from '../../assets/empty-heart.png'
import fullHeart from '../../assets/full-heart.png'

import { getUserId } from '../../lib/auth'



function DogShow() {
  const { dogId } = useParams()
  const [dog, setDog] = React.useState(null)
  const [isFavorited, setIsFavorited] = React.useState(false)
  const [favoriteId, setFavoriteId] = React.useState(null)
  const [isNew, setIsNew] = React.useState(false)
  const dogImages = []

  let favoriteObject = {
    dog: '',
    owner: '',
  }

  const userCheck = () => {
    if (getUserId()) {
      favoriteObject = {
        dog: dogId,
        owner: getUserId().toString(),
      }
      return getUserId().toString()
    } else return getUserId()
  }




  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleDog(dogId)
        setDog(res.data)
        favoriteCheck(res.data.favoritedBy)
        newFlagCheck(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [dogId])


  const handleFavorite = async () => {
    if (!isFavorited) {
      try {
        const res = await favoriteDog(dogId, favoriteObject)
        setIsFavorited(true)
        setFavoriteId(res.data.id)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await removeFavorite(dogId, favoriteId)
        setIsFavorited(false)
      } catch (err) {
        console.log(err)
      }
    }

  }


  const createImageArray = (dog) => {
    dogImages.push(dog.imageOne) &&
      (!dog.imageTwo || dogImages.push(dog.imageTwo)) &&
      (!dog.imageThree || dogImages.push(dog.imageThree))
    return
  }

  const favoriteCheck = (favorites) => {
    favorites.map(favorite => {
      favorite.owner.id === getUserId()
      setFavoriteId(favorite.id.toString())
      setIsFavorited(true)
    })
  }

  const newFlagCheck = (dog) => {
    const now = new Date
    const nowSeconds = Date.parse(now)
    const dogAdded = new Date(dog.dateAdded)
    const dogAddedDate = Date.parse(dogAdded)
    console.log(nowSeconds - dogAddedDate)
    if (nowSeconds - dogAddedDate < 2068935000) {
      setIsNew(true)
    }
  }

  const carouselProps = { dogImages, 'isNew': isNew }
  userCheck()


  return (
    <>
      <div className="text-center pt-10">
        <h3 className="text-xl m-1">
          <strong>Your rehoming journey starts here</strong>
        </h3>
        <p className="text-sm">Find out how rehoming from us works and how to get started finding your perfect match.</p>
        <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">How rehoming works &gt;</button>
      </div>

      {dog &&

        <>
          {createImageArray(dog)}
          <div className="bg-pawhub-purple">
            <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/dogs" className="hover:underline">Rehome</a> &gt; {dog.name}</p>
          </div>
          <div className="bg-pawhub-yellow flex justify-center items-center p-5">
            <div className="bg-white w-5/6 m-3 p-6">
              <div className="flex justify-between lg:justify-around">
                <div>
                  <h1 className="gooddog-font text-5xl">{dog.name}</h1>
                  <p className="text-base">I&apos;m looking for a home...</p>
                </div>
                <a onClick={handleFavorite}><img src={!isFavorited ? emptyHeart : fullHeart} className="w-10 h-10" /></a>

              </div>

              <Carousel {...carouselProps} />
              <h1 className="gooddog-font text-3xl">About {dog.name}</h1>
              <hr />
              <div className="px-2">
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <p>Sex: {dog.sex}</p>
              </div>
              <hr />
              <h1 className="gooddog-font text-2xl">About</h1>
              <div className="px-2 pb-2">
                <p>{dog.about}</p>
              </div>
              <h1 className="gooddog-font text-2xl">Type of Home Needed</h1>
              <div className="px-2">
                <p>{dog.homeDetails}</p>
              </div>
              {!dog.canLiveWithCats & !dog.canLiveWithDogs & !dog.canLiveWithKids ?
                <></> :
                <><h1 className="gooddog-font text-2xl">Important Information</h1>
                  <div className="px-2">
                    {dog.canLiveWithDogs &&
                      <p><img src={dogPaw} className="w-7 inline" /> May live with dogs</p>
                    }
                    {dog.canLiveWithCats &&
                      <p><img src={cat} className="w-7 inline" /> May live with cats</p>
                    }
                    {dog.canLiveWithKids &&
                      <p><img src={baby} className="w-7 inline" /> May live with children</p>
                    }
                  </div></>
              }

              <div className="pt-5">
                <p><strong>Donate today, to help us continue our work providing life-changing care and finding forever homes for thousands of dogs a year. We&apos;re so grateful for your support.</strong></p>
              </div>
              <div className="flex justify-around pt-5">
                <a href="/rehomingform">
                  <button className="bg-pawhub-purple hover:bg-pawhub-purple/50 text-white font-bold py-2 px-4 m-3 rounded">Rehoming me starts here</button>
                </a>

                <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">How rehoming works &gt;</button>
              </div>


            </div>
          </div>


        </>
      }

    </>
  )
}

export default DogShow