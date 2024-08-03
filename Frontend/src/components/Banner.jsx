import React from 'react'
import banner from '../../public/banner2.jpg'

export default function Banner() {
  return (

    <>
      <div className="max-w-screen-2xl pb-6 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className="text-4xl font-bold">
            Welcome to <span className='text-violet-500'>BookNest</span>  to learn something <span className='text-pink-500'>new everyday</span>!!
          </h1>
          <p className='text-xl'>
          At BookNest, we believe in the magic of books and the power of storytelling. Whether you’re a passionate reader, an aspiring writer, or simply someone looking for their next great read, BookNest is your go-to destination for all things literary.
          </p>

         
          <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        </div>
        <button className="btn mt-6 btn-accent">Accent</button>
        </div>
        <div className='right py-8 px-6 order-1 w-full md:w-1/2'>
          <img src={banner} className='w-90 h-85' alt="" />
          {/*
          <div className='order-3 pt-8 pb-6'>
          <p className='text-xl text-blue-800 font-bold'>
          Dive into our expertly crafted book lists and discover new titles tailored to your interests. From bestsellers to hidden gems, our recommendations help you find your next favorite book.
          </p>
          </div>
  */}
        </div>
      </div>
    </>
  )
}
