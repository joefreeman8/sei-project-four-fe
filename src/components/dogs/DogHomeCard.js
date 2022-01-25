import React from 'react'

function DogHomeCard({ id, name, imageOne, breed }) {
  return (
    <div className="flex w-full">
      <div className="bg-pawhub-yellow max-w-sm text-center mb-4">
        <a href={`/dogs/${id}`}>
          <img src={imageOne} className="p-1 bg-white index-image p-2"/>
          <h1 className="gooddog-font text-3xl">{name}</h1>
          <h2 className="text-base">{breed}</h2>
        </a>
      </div>
    </div>
  )
}

export default DogHomeCard