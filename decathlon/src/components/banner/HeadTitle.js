import React from 'react'
import {container, wrapper ,title, stroked, paragraph, button} from './HeadTitle.module.scss'

const HeadTitle = ({htitle, sub, par, btn}) => {
    return (
        <section className={container}>
            <div className={wrapper}>
                <h1 className={title}>{htitle}</h1>
                <div className={stroked}>{sub}</div>
                <p className={paragraph}>{par}</p>
                {btn && <button className={button}>{btn}</button>}
            </div>
        </section>
    )
}

export default HeadTitle
