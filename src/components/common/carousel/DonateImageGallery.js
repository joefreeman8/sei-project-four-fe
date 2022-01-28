import React from 'react'
import { CarouselHomeData } from '../../../assets/homeCarouselData/data'


function DonateImageGallery () {


  const [currentImage, setCurrentImage] = React.useState(0)
  let imageNumber = 0

  function changeImage () {
    if (imageNumber < (CarouselHomeData.length - 1)) {
      imageNumber ++ 
    } else {
      imageNumber = 0
    }
    setCurrentImage(imageNumber)
  }

  React.useEffect(() => {
    const interval = setInterval(changeImage, 3000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="h-1/4 w-3/4 flex flex-col justify-center items-center">
      { !CarouselHomeData[currentImage].image && <div className="max-h-96 min-h-96 w-96 fade-in-image"></div>}
      {CarouselHomeData[currentImage].image && <img key={Math.random()} className="max-h-96 min-h-96 w-96 fade-in-image" src={CarouselHomeData[currentImage].image}></img> } 
      <div className="w-96 h-12 text-xl bg-pawhub-grey flex flex-col justify-center items-center">
        <p className='text-white text-center'>{CarouselHomeData[currentImage].caption}</p>
      </div>
    </div>
  )  
}

export default DonateImageGallery