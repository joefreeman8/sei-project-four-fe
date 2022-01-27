import React from 'react'
import { CarouselHomeData } from '../../../assets/homeCarouselData/data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Carousel() {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const handleSlideChange = (e) => {
    if (currentSlide === 0 && e.target.dataset.id === 'left') {
      setCurrentSlide(CarouselHomeData.length - 1)
    } else if (currentSlide === CarouselHomeData.length - 1 && e.target.dataset.id === 'right') {
      setCurrentSlide(0)
    } else {
      e.target.dataset.id === 'left' ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className="mt-8">
      <div className="max-w-lg h-72 flex overflow-hidden relative">
        <AiOutlineLeft onClick={handleSlideChange} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' data-id='left' />

        <AiOutlineRight onClick={handleSlideChange} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' data-id='right' />

        {CarouselHomeData.map((slide, index) => {
          return (
              
            <img
              src={slide.image}
              alt="Image of dog"
              key={slide}
              className={
                index === currentSlide
                  ? 'block w-full h-auto object-cover'
                  : 'hidden'
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel