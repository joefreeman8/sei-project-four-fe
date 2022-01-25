import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Carousel(props) {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const array = Object.values(props)

  const handleSlideChange = (e) => {
    if (currentSlide === 0 && e.target.dataset.id === 'left') {
      setCurrentSlide(array.length - 1)
    } else if (currentSlide === array.length - 1 && e.target.dataset.id === 'right'){
      setCurrentSlide(0)
    } else {
      e.target.dataset.id === 'left' ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide + 1)
    }
  }


  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-xl h-96 flex overflow-hidden relative">
        {array.length > 1 &&
        <><AiOutlineLeft onClick={handleSlideChange} className='absolute left-0 text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='left' /><AiOutlineRight onClick={handleSlideChange} className='absolute right-0 text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='right' /></>
        }
        {array.map((slide, index) => {
          return (
            <>
              <img
                src={slide}
                alt="This is a carousel slide"
                key={slide}
                className={index === currentSlide
                  ? 'block w-full h-auto object-contain bg-white'
                  : 'hidden'} /></>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel