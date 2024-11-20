import React from 'react'
import { Nav } from "../components/Nav"
import Fourth from "../assets/fourth.png"
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const About = () => {
    return (
        <>
            <Nav />
            <motion.div className="w-[80%] bg-secondary h-[150px] rounded-tr-[150px] rounded-br-[150px] flex third justify-center items-center text-[30px] sm:text-[50px] font-bold text-white
            " initial={{ opacity: 0, x: -100 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
                transition={{ duration: 0.9 }}>
                ABOUT US
            </motion.div>
            <motion.section className=' w-full px-[20px] flex flex-col justify-center py-10 md:flex-row md:justify-center  md:items-center gap-5 md:gap-0 '>
                <motion.div className="w-full md:w-[500px] " initial={{ opacity: 0, x: 100 }} // Initial animation state
                    animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
                    transition={{ duration: 0.5 }} >
                    <img src={Fourth} alt="" />
                </motion.div>
                <div className="  md:w-1/2">
                    <motion.h3 className='pt-5 font-bold text-[30px] text-secondary text-center pb-5 leading-8' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> Transformative Finance</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Opomulero Capitals is an innovative asset management company that merges profitability with social impact. We provide public investors an opportunity to invest in Market funding, giving Retail Traders soft loans, getting interests while empowering Retail Traders to scale their trades.
                        With us, your investment works in two ways:

                    </motion.p >

                    <motion.p  ><span className='text-secondary font-bold'>Generate Sustainable income:</span> Earn regular returns from the trade of many Retail Traders who actively make daily sales.
                        <br />
                        <span className='text-secondary font-bold'> Empower Local drivers:</span> At the end of the investment cycle, Retail traders becomes active merchants in their trade, creating a path to financial independence.
                    </motion.p >
                </div>

            </motion.section>
            <motion.section  className='bg-secondary rounded-tl-[100px] px-10 fifth md:rounded-br-[0px] py-10 rounded-br-[100px]'>
                <motion.h3 className='pt-5 font-bold text-[30px] text-white text-center pb-5 leading-8 ' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}> WHY INVEST IN OPOMULERO CAPITALS </motion.h3>
                <motion.p className='text-white' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <span className='font-bold text-[20px]' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>High Roi & Transparency:</span> With guaranteed 30% ROI, your capital is working to its fullest potential. Our innovative and fast response customer service allows investors to track the performance of their capital in the markets and monitor interests.
                    <br />
                    <span className='font-bold text-[20px]'>Social Impact [Empower Retail Traders]:</span> Opomulero Capitals doesn't just make profit, every retail traders involved in our program works towards scaling their businesses, creating long term economic stability for their families and communities. <br />
                    <span className='font-bold text-[20px]'>Sustainable Business model:</span> With the growing demands of consumer
                    products and perishables. Investing in retail traders to get more goods to sell is a secure, recession proof venture. The markets we operate in are popular markets in the city ensuring steady and daily income from which you earn returns.
                </motion.p >
            </motion.section >
            <motion.div className='px-[20px] text-center py-5' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <motion.h3 className='text-center font-bold  text-[20px] text-secondary' >GET STARTED TODAY </motion.h3>
                Steps on how to get started
                To commence on this scheme, request for the investment contract via <Link to="home" className='text-secondary underline'>email</Link> or  <Link to="https://wa.me/+23479617597" className='text-secondary underline'>WhatsApp </Link>.
                Fill and submit to either or mail info@opomulerocapitals.com.ng or our customer service on WhatsApp and we will take it up from there. 

            </motion.div>
            <Footer />

        </>
    )
}
