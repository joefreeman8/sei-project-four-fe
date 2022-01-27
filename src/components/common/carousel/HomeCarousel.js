import React, { Component } from 'react'
import { CarouselHomeData } from '../../../assets/homeCarouselData/data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
    }
  }

  nextSlide = () => {
    const newSlide =
      this.state.currentSlide === CarouselHomeData.length - 1
        ? 0
        : this.state.currentSlide + 1
    this.setState({ currentSlide: newSlide })
  }
  
  prevSlide = () => {
    const newSlide =
      this.state.currentSlide === 0
        ? CarouselHomeData.length - 1
        : this.state.currentSlide - 1
    this.setState({ currentSlide: newSlide })
  }

  render() {
    return (
      <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative">
          <AiOutlineLeft onClick={this.prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' />

          <AiOutlineRight onClick={this.nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' />

          {CarouselHomeData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="Dogs for adoption"
                key={slide.image}
                className={
                  index === this.state.currentSlide
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
}

export default Carousel