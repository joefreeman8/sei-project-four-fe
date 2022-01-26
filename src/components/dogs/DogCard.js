import React from 'react'

function DogCard({ id, name, imageOne, breed, dateAdded }) {

  const [isNew, setIsNew] = React.useState(null)

    
  React.useEffect(() => {
    const now = new Date
    const nowSeconds = Date.parse(now)
    const dogAdded = new Date(dateAdded)
    const dogAddedDate = Date.parse(dogAdded)
    if (nowSeconds - dogAddedDate < 2068935000 ) {
      setIsNew(true)
    }
  }, [dateAdded])

  return (
    <div className="flex justify-center">
      <div className="bg-pawhub-yellow w-full max-w-sm text-center mb-4 group hover:text-pawhub-purple group-hover:bg-pawhub-purple flex justify-center">
        <a href={`/dogs/${id}`} className='relative'>
          {isNew && <div className="triangle-new absolute top-0 left-0">
            <p className='triangle-text -mt-16 ml-5 text-xl font-bold'>New</p></div>} 
          <img src={imageOne} className="bg-white index-image p-1 group-hover:bg-pawhub-purple"
          />
          <h1 className="gooddog-font text-3xl">{name}</h1>
          <h2 className="text-base">{breed}</h2>
        </a>
      </div>
    </div>
  )
}

export default DogCard