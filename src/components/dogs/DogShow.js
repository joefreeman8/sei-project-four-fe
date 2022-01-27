import React from 'react'
import { useParams } from 'react-router'
import { createQuestion, deleteQuestion, favoriteDog, getSingleDog, removeFavorite } from '../../lib/api'
import Carousel from './Carousel'
import { isAuthenticated, isOwner, getUserId } from '../../lib/auth'
import { Link } from 'react-router-dom'
import Error from '../common/Error'

import dogPaw from '../../assets/dog-paw.png'
import cat from '../../assets/cat.png'
import baby from '../../assets/baby.png'
import emptyHeart from '../../assets/empty-heart.png'
import fullHeart from '../../assets/full-heart.png'
import dogFigure from '../../assets/dog-figure.png'


function DogShow() {
  const { dogId } = useParams()
  const [dog, setDog] = React.useState(null)
  const [isFavorited, setIsFavorited] = React.useState(false)
  const [favoriteId, setFavoriteId] = React.useState(null)
  const [isNew, setIsNew] = React.useState(false)
  const dogImages = []
  const [isError, setIsError] = React.useState(false)
  const [error, setError] = React.useState(null)

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

  const [question, setQuestion] = React.useState('')
  const isAuth = isAuthenticated()
  const [userId, setUserId] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleDog(dogId)
        setDog(res.data)
        favoriteCheck(res.data.favoritedBy)
        newFlagCheck(res.data)
      } catch (err) {
        setError(err.response.status.toString())
        setIsError(true)
      }
    }
    getData()
    const interval = setInterval(getData, 500)
    return () => clearInterval(interval)
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
    if (getUserId()) {
      setUserId(getUserId().toString())
    }
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
  const handleChange = (e) => {
    setQuestion(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createQuestion(dogId, { content: question, dog: dogId, owner: userId })
      setQuestion('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (e) => {
    if (window.confirm('Do you want to delete this question?')) {
      try {
        await deleteQuestion(dogId, e.target.id)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      {isError && 
      <div className="bg-black h-screen">
        <Error error={error} />
      </div>
      }
      {dog && !isError &&
    <>
      <div className="text-center pt-10">
        <h3 className="text-xl m-1">
          <strong>Your rehoming journey starts here</strong>
        </h3>
        <p className="text-sm">Find out how rehoming from us works and how to get started finding your perfect match.</p>
        <Link to="/rehoming">
          <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">
            How rehoming works &gt;</button>
        </Link>
      </div>
      {createImageArray(dog)}
      <div className="bg-pawhub-purple">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/dogs" className="hover:underline">Rehome</a> &gt; {dog.name}</p>
      </div>
      <div className="bg-pawhub-yellow flex justify-center items-center p-5 flex-col">
        <div className="bg-white w-5/6 m-3 p-6 xl:w-2/3">
          <div className="flex justify-between lg:justify-around">
            <div>
              <h1 className="gooddog-font text-5xl">{dog.name}</h1>
              <p className="text-base">I&apos;m looking for a home...</p>
            </div>
            {isAuth &&
                  <a onClick={handleFavorite}><img src={!isFavorited ? emptyHeart : fullHeart} className="w-10 h-10" /></a>
            }
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
          <div className="flex justify-around pt-5 flex-col lg:flex-row md:flex-row sm:flex-row">
            <a href="/rehomingform" className="flex justify-around xs:items-center">
              <button className="bg-pawhub-purple hover:bg-pawhub-purple/50 text-white font-bold py-2 px-4 m-3 rounded">Rehoming me starts here</button>
            </a>
            <a href="/donation" className="flex justify-around xs:items-center">
              <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded"><img src={dogFigure} className="w-6 h-6 inline" /> Donate to Dogs Trust</button>
            </a>
          </div>


        </div>
        <div className="bg-white w-5/6 m-3 p-6 xl:w-2/3">
          <h1 className="gooddog-font text-3xl">Questions</h1>
          {dog.questions.length > 0 &&
                <h1 className="m-1"><strong>Questions asked about {dog.name}</strong></h1>
          }
          <div className="flex items-center flex-col">
            {dog.questions.map(question => 
              <div key={question.id} className="w-5/6 m-2 shadow-lg p-2 rounded-md">
                <p>{question.content}</p>
                {isOwner(getUserId()) ?
                  <div className="flex flex-col items-end">
                    <p className="text-xs">asked by: you</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleDelete} id={question.id}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                        
                  </div> :
                  <p className="text-right text-xs">asked by: {question.owner.username}</p>
                }
              </div>  
            )
            }
          </div>
          {isAuth &&
                <><label><strong>Can&apos;t see the answer to your question? Ask something about {dog.name}?</strong></label><form onSubmit={handleSubmit}>
                  <input type="text" className="border focus:border-pawhub-yellow w-2/3 p-1 m-2 rounded" placeholder="Type your question here" onChange={handleChange} value={question}></input>
                  <br />
                  <button type="submit" className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">Submit Question</button>
                </form></>
          }
              
        </div>
      </div>
    </>
      }
    </>
  )
}

export default DogShow