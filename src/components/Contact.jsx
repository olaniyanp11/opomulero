import React from 'react'
import Call from '../assets/call.jpeg'

export const Contact = () => {
    return (
        <div>
            <h2 className='font-bold text-[30px] text-secondary text-center'> Contact Us </h2>
            <div className='flex flex-col'>
                <div className="w-full ">
                    <form action="" className='px-[30px] '>
                        <div>
                            <label htmlFor="email" className='font-bold text-neutral-600'>Email</label>
                            <input type="email" className='w-full border border-neutral-300 ' />
                       </div>

                    </form>
                </div>
                <div> <img src={Call} alt="" className='w-full' /></div>
            </div>
        </div>
    )
}
