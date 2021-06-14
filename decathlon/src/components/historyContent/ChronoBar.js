import React from 'react'
import {fixed,gradient_elem} from './ChronoBar.module.scss'

const ChronoBar = () => {
    return (
        <div className={fixed}>
            <div className={gradient_elem}></div>
        </div>
    )
}

export default ChronoBar
