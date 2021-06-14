import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Hamburger from './hamburger/Hamburger'
import LogoArea from './logoarea/LogoArea'
import GlobalContext from '../../utils/GlobalContext'
import {header, navbar, navmenu_icon, navlink_left} from './Navigation.module.scss'

const Navigation = () => {
    const ctx = useContext(GlobalContext)

    function closeGlobal() {
        if(ctx.panelOpen) {
            ctx.setOpen(false)
        }
    }

    return (
        <header className={header}>
            <nav className={navbar}>
                <div className={navmenu_icon}>
                    <Hamburger /> 
                </div>
                <Link to="/">
                    <LogoArea 
                        src="/img/decathlon-logo.png"
                        alt="Decathlon logo"
                        width="100%"
                        height="inherit"
                    />
                </Link>
                <Link onClick={closeGlobal} className={navlink_left} to="/params/jobs">
                    <div >
                        Our offers
                    </div>
                </Link>
            </nav> 
        </header>
    )
}

export default Navigation
