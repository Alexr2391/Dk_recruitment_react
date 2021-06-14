import React from 'react'
import {container} from './LogoArea.module.scss'

const LogoArea = ({src,alt, width}) => {
    return (
        <div className={container}>
            <img src={src} alt={alt} style={{width: parseInt(width)}}/>
        </div>
    )
}

export default LogoArea
