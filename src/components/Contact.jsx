import React from 'react'
import Call from '../assets/call.jpeg'

export const Contact = () => {
    return (
        <div>
            <h2 className='font-bold text-[30px] text-secondary text-center'> Contact Us </h2>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className="w-full md:w-1/2">
                    <form action="" className='px-[30px] mb-5  '>
                        <div>
                            <label htmlFor="email" className='font-bold text-neutral-500 text-[14px]'>Email</label>
                            <input type="email" className='w-full border border-neutral-300 rounded-lg p-2 outline-secondary' />
                        </div>
                        <div>
                            <label htmlFor="email" className='font-bold text-neutral-500 text-[14px]'>Subject</label>
                            <input type="text" className='w-full border border-neutral-300 rounded-lg p-2 outline-secondary' />
                        </div>
                        <div>
                            <label htmlFor="email" className='font-bold text-neutral-500 text-[14px]'>Message</label>
                            <textarea type="text" className='w-full border border-neutral-300 rounded-lg p-4 outline-secondary' />
                        </div>
                        <div>
                            <div className="btn">Submit</div>
                        </div>
                    </form>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src={Call} alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}
