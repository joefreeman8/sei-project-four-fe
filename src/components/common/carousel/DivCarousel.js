import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function DivCarousel(props) {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const array = Object.values(props)

  const handleSlideChange = (e) => {
    if (currentSlide === 0 && e.target.dataset.id === 'left') {
      setCurrentSlide(array.length - 1)
    } else if (currentSlide === array.length - 1 && e.target.dataset.id === 'right') {
      setCurrentSlide(0)
    } else {
      e.target.dataset.id === 'left' ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide + 1)
    }
  }


  return (
    <div className=" h-3/4 px-10 w-full flex justify-center">
      <div className="w-full h-96 flex overflow-hidden relative">
        {array.length > 1 &&
          <><AiOutlineLeft onClick={handleSlideChange} className='absolute left-0 text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='left' /><AiOutlineRight onClick={handleSlideChange} className='absolute right-0 text-3xl inset-y-1/2 text-pawhub-purple cursor-pointer' data-id='right' /></>
        }
        {array.map((slide, index) => {
          return (
            <div
              key={slide.title}
              className={
                index === currentSlide
                  ? 'block h-full w-full object-contain bg-paw-hubyellow flex flex-row justify-center'
                  : 'hidden'
              }
            >
              <div className='flex flex-col justify-center items-center w-2/3'>
                <h6 className='text-2xl font-bold mb-4'>{slide.title}</h6>
                <p>{slide.content}</p>
                <Link to={slide.link}>
                  <button className="block mx-auto bg-pawhub-grey hover:bg-white rounded-md text-white hover:text-black border-2 border-pawhub-grey p-5 h-16 w-64 mt-10">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
              <div className='flex flex-col item-center justify-center items-center w-auto'>
                <img src={slide.png}></img>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DivCarousel