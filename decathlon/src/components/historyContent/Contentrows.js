import React from 'react'
import {flex_container_row} from './Contentrows.module.scss'
import Rows from './Rows'
const Contentrows = () => {
    return (
        <section className={flex_container_row}>
            <Rows 
            date="2018"
            child1='/img/river1.png'
            />
            <Rows 
            date="2019"
            child1='/img/river2.png'
            />
            <Rows 
            date="2020"
            child1='/img/river3.png'
            />
            <Rows 
            date="2021"
            child1='/img/river1.png'
            />
        </section>
    )
}

export default Contentrows
