import React from 'react'
import {motion} from 'framer-motion'
import Banner from '../components/banner/Banner'
import HeadTitle from '../components/banner/HeadTitle'
import SvgCover from '../components/banner/SvgCover'

const Home = () => {

    return (
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
                transition={{
                    duration: .3
                }}
            >
                
                <Banner
                element1={
                    <HeadTitle
                    htitle="Kickstart"
                    sub="Your career in 2021*"
                    par="In the best sport workplace"
                    btn="Learn more"
                />
                }
                element2={
                    <SvgCover />
                }
                >

                    
                </Banner>
            </motion.div>
    )
}

export default Home
