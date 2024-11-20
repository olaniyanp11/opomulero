import React from 'react'
import Load from '../assets/test.gif'

export const Loader = () => {
  return (
      <>
          <div className=' w-full h-screen fixed bg-white z-[12345678] flex justify-center items-center'>
            <img src={Load} className=''/>
          </div>
      </>
  )
}
