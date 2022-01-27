import React from 'react'
import { getSingleUser, deleteUser } from '../../lib/api'
import { getUserId, removeToken } from '../../lib/auth'
import DogCard from '../dogs/DogCard'
import dogFigure from '../../assets/dog-figure.png'
import backgroundImage from '../../assets/user-background.png'
import { useNavigate } from 'react-router-dom'
import Error from './Error'


function UserProfile() {
  const [user, setUser] = React.useState(null)
  const userId = getUserId()
  const navigate = useNavigate()
  const [isError, setIsError] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleUser(userId)
        setUser(res.data)
      } catch (err) {
        console.log(err.response.status)

        setError(err.response.status.toString())
        setIsError(true)
      }
    }
    getData()
  }, [userId])

  const handleDelete = async (e) => {
    e.preventDefault()
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await deleteUser(userId)
        removeToken()
        navigate('/')
      } catch (err) {
        console.log(err.response)
        setError(err.response.status.toString())
        setIsError(true)
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
      {user && !isError &&
      <>
        <div className="text-center background-image-container">
          <h1 className="image-text kessel-font" id="title">Profile</h1>
          <p className="image-text text-lg" id="tagline">Welcome back {user.username}
          </p>
          <img src={backgroundImage} className="background-image"/>
        </div>
        <div className="bg-pawhub-purple">
          <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; {user.username}</p>
        </div>
        <div className="bg-pawhub-yellow flex items-center p-5 flex-col h-full">
          <div className="bg-white w-5/6 m-3 p-6 xl:w-2/3">
            <h3 className="text-3xl m-1 gooddog-font">Favorites</h3>
            {user.favoritedDogs.length > 0 ?
              <div className="flex justify-around grid grid-cols-2 xs:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
                {user.favoritedDogs.map(dog => {
                  return <DogCard key={dog.dog.id} {...dog.dog} />
                })}
              </div>
              :
              <>
                <p className="p-4">Oh no, looks like you haven&apos;t favorited any dogs yet! Why not take a look at all the pooches who need a home and pick your favorites?</p>
                <a href="/dogs">
                  <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded"><img src={dogFigure} className="w-6 h-6 inline" /> Check out all the available dogs</button>
                </a>
              </>
            }
          </div>
          <div className="bg-white w-5/6 m-3 p-6 xl:w-2/3">
            <p className="px-4 pt-4">Found your pefect match?</p>
            <button className="bg-red-800 hover:bg-red-800/50 text-white font-bold py-2 px-4 m-3 rounded" onClick={handleDelete}>Delete your account</button>
          </div>
        </div>
      </>
      }
    </>

  )
}

export default UserProfile