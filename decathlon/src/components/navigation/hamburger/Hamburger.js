import React,{useState, useContext} from 'react'
import classes from './Hamburger.module.scss'
import GlobalContext from '../../../utils/GlobalContext'

const Hamburger = () => {

    const [open, setOpen] = useState(false)

    const ctx = useContext(GlobalContext)

    function openPane() {

        ctx.setOpen()

        return open === false 
        ? setOpen(true)
        : setOpen(false)
    }

    return (
    <svg onClick={openPane} className={classes.nav_menu} viewBox="0,0,10,10" height='45' width='45'>
        <path className={ctx.panelOpen ? `${classes.one} ${classes.open}`: classes.one} d="M2,3 L9,3"/>
        <path className={ctx.panelOpen ? `${classes.two} ${classes.open}`: classes.two} d="M2,6 L7,6"/>
        <path className={ctx.panelOpen ? `${classes.three} ${classes.open}`: classes.three} d="M2,9 L5,9"/>
    </svg>   
    )
}

export default Hamburger
