import React from 'react'
import { Button } from '../ui/button'

const Banner = () => {
  return (
    <div className='  w-full flex items-center justify-center h-[90vh]'>

      <div className=' flex flex-col gap-2 items-center '>
      <p className=' mt-2 text-gray-400 text-xl'>Work with us.</p>
      <h2 className=' text-5xl text-center'>
            Let's Grow Your Business .
        </h2>
        <p className=' mt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dignissimos</p>

        <Button className='mt-5'>Get Started</Button>
      </div>
    </div>
  )
}

export default Banner