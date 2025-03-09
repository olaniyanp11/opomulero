import React from 'react'
import First from "../assets/first.png"
import Third from "../assets/third.png"
import { Nav } from '../components/Nav'
import '../custom.css'
import { BiPhone } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { LuHeartHandshake } from 'react-icons/lu'
import { BiChart } from 'react-icons/bi'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'


export const Home = () => {


  return (
    <>


      <Nav />
      <motion.section id='Home' className='hero h-[90vh] w-full text-white leading-10 px-[40px] bg-fixed parallax'>
        <motion.div className='w-full sm:w-[60%] h-full flex flex-col justify-center'>

          <motion.h3 className='text-[20px] font-bold leading-tight' initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
            transition={{ duration: 0.5 }}>
            Welcome to
          </motion.h3>
          <motion.h1 className='text-white font-bold sm:text-[80px] leading-[1] text-[45px] ' initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
            transition={{ duration: 0.7 }}>
            Opomulero Capitals limited
          </motion.h1>
          <motion.p className='leading-tight w-full my-3' initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation state when component mounts
            transition={{ duration: 0.9 }}> where we merge profitability with social impact.</motion.p>
          <Link to='/contact' className=' flex justify-center items-center gap-3 bg-transparent border-white border-2 w-[200px] p-2 rounded-[30px] text-white text-xl hover:animate-pulse hover:bg-white hover:text-secondary transition-[2s]'> Contact <BiPhone className=' ' /> </Link>
        </motion.div>
        <motion.div className='flex w-full justify-center relative'>
          <motion.div className='w-[300px] sm:w-1/2 bg-white text-secondary leading-3 mt-[-40px] items-center gap-3 flex flex-col text-center border border-secondary p-3'>
            <LuHeartHandshake className=' text-[30px] ' />
            <motion.div className="flex justify-center font-bold gap-10">
              <motion.p className='leading-5'>
                IMPACTING TRADERS </motion.p>
              <motion.p className='leading-5'> RECIEVING PROFITS</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className='mt-[80px] px-[40px] pb-10 text-[18px]'>
        <motion.h2 className='text-center  font-bold text-secondary text-[30px] leading-loose mb-5 sm:mb-5 ' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}transition={{ duration: 1 }} >About Us</motion.h2>
        <motion.div className='flex flex-col w-full gap-5 items-center sm:flex-row justify-center'>
          <motion.div className='text-left tracking-[2px] sm:w-[40%] w-full'>
            <motion.p>Opomulero Capitals is an innovative asset management company that merges profitability with social impact. </motion.p>
            <motion.p>
              We provide public investors an opportunity to invest in Market funding, giving Retail Traders soft loans, getting interests while empowering Retail Traders to scale their trades.
            </motion.p>
            <Link to={'/about'} className='text-secondary underline'>learn more ...</Link>

          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}transition={{ duration: 1 }} >
            <img src={First} alt="" className='rounded-tl-[50px] rounded-br-[50px] w-full sm:w-[500px]' />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className='bg-secondary relative flex flex-col  items-center py-10 second' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}transition={{ duration: 1 }} >
        <motion.h2 className='text-center  font-bold text-white text-2xl mb-5 sm:mb-10 leading-7 ' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}transition={{ duration: 1 }}>THE INVESTMENT OPPORTUNITY </motion.h2>
        <motion.div className='flex flex-col gap-y-7 sm:flex-row  sm:justify-between sm:w-[90%] w-[100%] items-center md:w-[70%]'>
          <motion.div className='bg-white rounded-xl text-secondary w-[300px] flex flex-col items-center py-7 px-7 ' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <BiChart className='text-2xl' />
            <motion.h3 className='text-center font-bold  text-[20px]' >INVESTMENT DETAILS</motion.h3>
            <motion.p className='text-left'  >
              1.	1 Retail Trader- N240,000. <br />
              2.	5 Retail Traders - N1,200,000 <br />
              3.	50 Retail Traders- N12,000,000 <br />
            </motion.p>
          </motion.div>
          <motion.div className='bg-white rounded-xl text-secondary w-[300px] flex flex-col items-center py-7 px-7' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <BiMoneyWithdraw className='text-2xl' />
            <motion.h3 className='text-center font-bold  text-[20px]' >RETURN ON INVESTMENT </motion.h3>
            <motion.p className='text-left' >
              1 Retail Trader - N272,000 <br />
              2.	5 Retail Traders - N1,560,000 <br />
              2.	5 Retail Traders - N1,560,000 <br />
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.h2 className='text-center  font-bold text-white text-2xl mb-5 sm:mb-10 leading-7 animate-pulse py-5'>INVESTMENT DURATION - 12months (52 weeks) </motion.h2>
      </motion.section>
      <motion.div className='px-[20px] text-center py-5'>
        <motion.h3 className='text-center font-bold  text-[20px] text-secondary'>NOTICE BOARD </motion.h3>

        The Traders would be given a soft loans of 20,000 monthly and they pay back as low as N1,000 on a daily basis with interests at the end of each month. Our onsite BDO collects the money on a daily basis and observe how the traders are utilising each loan.
        At the end of the investment tenure, they would have scaled their trade.
      </motion.div>
      <motion.section className='bg-[#03305fb9] w-full px-[20px] py-10 flex flex-col justify-center md:flex-row md:justify-center  md:items-center gap-5 '>

        <motion.div className="w-full md:w-[500px] " initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <img src={Third} alt="" />
        </motion.div>
        <motion.div className=" text-white md:w-1/2" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <motion.h3 className='pt-5 font-bold text-[30px]'>THE IMPACT </motion.h3>
          <motion.p>Opomulero Capitals is not just an investment, its a movement toward sustainable livelihoods and community growth.

          </motion.p>
          <motion.h3 className='font-bold pt-2'>By the end of the year</motion.h3>
          <motion.p className=''>1. Retail trader scale their businesses, securing financial independence <br />
             2. Investors walks away with substantial returns and the satisfaction of creating positive social change in the society.
          </motion.p>
        </motion.div>

      </motion.section>
    
      <Footer />
    </>
  )
}
