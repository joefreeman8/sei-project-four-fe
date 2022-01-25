import React from 'react'

function DogCard({ id, name, imageOne, breed }) {
  return (
    <div className="flex justify-center">
      <div className="bg-pawhub-yellow max-w-sm text-center mb-4 group hover:text-pawhub-purple group-hover:bg-pawhub-purple">
        <a href={`/dogs/${id}`}>
          <img src={imageOne} className="bg-white index-image p-1 group-hover:bg-pawhub-purple"/>
          <h1 className="gooddog-font text-3xl">{name}</h1>
          <h2 className="text-base">{breed}</h2>

        </a>
      </div>
    </div>
  )
}

export default DogCard