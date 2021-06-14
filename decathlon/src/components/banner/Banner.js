import React from 'react'
import {container,wrapper,svg_container} from './Banner.module.scss'

const Banner = ({element1, element2}) => {
    return (
        <section className={container}>
            <div className={wrapper}>
            {element1}
                <div className={svg_container}>
                    {element2}
                </div>
            </div>
        </section>
    )
}

Banner.defaultProps = {
    element1 : false,
    element2 : false
}

export default Banner
