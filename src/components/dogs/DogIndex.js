import React from 'react'
import { getAllDogs } from '../../lib/api'
import backgroundImage from '../../assets/Rehome-Background.png'
import DogCard from './DogCard'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import Error from '../common/Error'
import Loading from '../common/Loading'

function DogIndex() {
  const [dogs, setDogs] = React.useState([])

  const [liveWith, setLiveWith] = React.useState([])
  const [breed, setBreed] = React.useState([])
  const [age, setAge] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [error, setError] = React.useState(null)
  const isLoading = !dogs && !isError



  const liveWithSelectOptions = [
    { value: 'Children', label: 'Children' },
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Cats', label: 'Cats' }
  ]

  const breedSelectOptions = [
    { value: 'Crossbreed', label: 'Crossbreed' },
    { value: 'Akita', label: 'Akita' },
    { value: 'American Bulldog', label: 'American Bulldog' },
    { value: 'Border Collie', label: 'Border Collie' },
    { value: 'Bulldog: English', label: 'Bulldog: English' },
    { value: 'Cane Corso', label: 'Cane Corso' },
    { value: 'Chinese Crested', label: 'Chinese Crested' },
    { value: 'Cocker Spaniel', label: 'Cocker Spaniel' },
    { value: 'Collie Cross (Border)', label: 'Collie Cross (Border)' },
    { value: 'Collie Cross', label: 'Collie Cross' },
    { value: 'Collie', label: 'Collie' },
    { value: 'Dachshund', label: 'Dachshund' },
    { value: 'Dobermann', label: 'Dobermann' },
    { value: 'English Springer Spaniel', label: 'English Springer Spaniel' },
    { value: 'German Shepherd', label: 'German Shepherd' },
    { value: 'Greyhound', label: 'Greyhound' },
    { value: 'Jack Russell Terrier', label: 'Jack Russell Terrier' },
    { value: 'Lab Cross', label: 'Lab Cross' },
    { value: 'Lhasa Apso', label: 'Lhasa Apso' },
    { value: 'Lurcher', label: 'Lurcher' },
    { value: 'Mastiff: Old English', label: 'Mastiff: Old English' },
    { value: 'Parson Russell Terrier', label: 'Parson Russell Terrier' },
    { value: 'Pomeranian', label: 'Pomeranian' },
    { value: 'Rottweiler', label: 'Rottweiler' },
    { value: 'Saluki', label: 'Saluki' },
    { value: 'Shar-Pei', label: 'Shar-Pei' },
    { value: 'Siberian Husky', label: 'Siberian Husky' },
    { value: 'Spaniel Cross', label: 'Spaniel Cross' },
    { value: 'Staffordshire Bull Terrier', label: 'Staffordshire Bull Terrier' },
    { value: 'Staffordshire Cross', label: 'Staffordshire Cross' },
    { value: 'Terrier Cross', label: 'Terrier Cross' },
    { value: 'Terrier: Tibetan', label: 'Terrier: Tibetan' }
  ]

  const ageSelectOptions = [
    { value: '0 to 6 Months', label: '0 to 6 Months' },
    { value: '1 to 2 Years', label: '1 to 2 Years' },
    { value: '2 to 5 Years', label: '2 to 5 Years' },
    { value: '5 to 7 Years', label: '5 to 7 Years' },
    { value: '8 and over', label: '8 and over' }
  ]
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllDogs()
        setDogs(data)
      } catch (err) {
        setError(err.response.status.toString())
        setIsError(true)
      }
    }
    getData()
  }, [])

  console.log(error)

  const handleLiveWithSelect = (selected) => {
    const selectedLiveWith = selected.map(item => item.value)
    setLiveWith(selectedLiveWith)
  }

  const handleAgeSelect = (selected) => {
    const selectedAge = selected.map(item => item.value)
    setAge(selectedAge)
  }

  const handleBreedSelect = (selected) => {
    const selectedBreed = selected.map(item => item.value)
    setBreed(selectedBreed)
  }

  const filteredDogs = (dogs) => {
    return dogs.filter(dog => {
      return (breed.includes(dog.breed) || breed.length === 0) &&
        (age.includes(dog.age) || age.length === 0) &&
        (dog.canLiveWithDogs && liveWith.includes('Dogs') || !liveWith.includes('Dogs')) &&
        (dog.canLiveWithCats && liveWith.includes('Cats') || !liveWith.includes('Cats')) &&
        (dog.canLiveWithKids && liveWith.includes('Children') || !liveWith.includes('Children'))
    })

  }
  
  return (
    <>
      {isLoading && <Loading />}
      {isError && 
          <Error error={error} />
      }
      {dogs && !isError && (
        <>
          <div className="background-image-container">
            <h1 className="image-text kessel-font" id="title">Rehoming</h1>
            <p className="image-text text-lg" id="tagline">A dog is for life, not just for Christmas
              <sup>®</sup>
            </p>
            <img src={backgroundImage} className="background-image"/>
          </div>
          <div>

            <div>
              <div className="text-center">
                <h3 className="text-xl m-1">
                  <strong>Your rehoming journey starts here</strong>
                </h3>
                <p className="text-sm">Find out how rehoming from us works and how to get started finding your perfect match.</p>
                <Link to="/rehoming">
                  <button className="bg-pawhub-yellow hover:bg-pawhub-yellow/50 text-pawhub-grey font-bold py-2 px-4 m-3 rounded">
    How rehoming works &gt;</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='bg-pawhub-purple text-white p-8'>
            <div className="filter-container">
              <div className="m-2 filter-item">
                <label className="p-1">May live with...</label>
                <div className="text-pawhub-grey">
                  <Select
                    options={liveWithSelectOptions}
                    isMulti
                    onChange={handleLiveWithSelect}
                    value={liveWith.map(item => ({
                      label: item[0] + item.substring(1),
                      value: item,
                    }))}
                  />
                </div>
              </div>
              <div className="m-2 filter-item">
                <label className="p-1">Age</label>
                <div className="text-pawhub-grey">
                  <Select
                    options={ageSelectOptions}
                    isMulti
                    onChange={handleAgeSelect}
                    value={age.map(item => ({
                      label: item[0] + item.substring(1),
                      value: item,
                    }))}
                  />
                </div>
              </div>
              <div className="m-2 filter-item">
                <label className="p-1">Breed</label>
                <div className="text-pawhub-grey">
                  <Select
                    options={breedSelectOptions}
                    isMulti
                    onChange={handleBreedSelect}
                    value={breed.map(item => ({
                      label: item[0] + item.substring(1),
                      value: item,
                    }))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid flex grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 bg-pawhub-yellow pt-10 pb-10 justify-around">
            {filteredDogs(dogs).map(dog => 
              <DogCard key={dog.id} {...dog} />
            )}
          </div>
        </>

      )
      }

    </>
  )
}

export default DogIndex