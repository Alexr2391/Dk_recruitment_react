import React from 'react'
import {main} from './Main.module.scss'

const Main = ({children}) => {
    return (
        <main className={main}>
            {children}
        </main>
    )
}

export default Main
