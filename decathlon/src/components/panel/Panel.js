import React, {useContext} from 'react'
import GlobalContext from '../../utils/GlobalContext'
import NavList from './navlist/Navlist'
import {container, open} from './Panel.module.scss'

const Panel = () => {

    const ctx = useContext(GlobalContext)

    return (
        <section className={`${container} ${ctx.panelOpen ? open : ""}`}>
            <NavList />
        </section>
    )
}

export default Panel
