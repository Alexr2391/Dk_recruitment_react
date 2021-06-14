import React from 'react'
import {wrapper} from './PageWrapper.module.scss'

const PageWrapper = ({children}) => {
    return (
        <div className={wrapper}>
            {children}
        </div>
    )
}

export default PageWrapper
