import React, {useContext, useRef, useState, useEffect} from 'react'
import {
    container, 
    navlist_wrapper, 
    link_list, 
    list_item,
    drop_container,
    drop_inner,
    dropdown_header,
    active_links,
    active_container,

} from './Navlist.module.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GlobalContext from '../../../utils/GlobalContext'
import Axios from 'axios'


const Navlist = () => {

    let contentList = []

    const ctx = useContext(GlobalContext)

    const linkRef = useRef([])
    const fetchRef = useRef([])

    const[checkOpen, setCheckOpen]= useState(contentList.map(items => false))

    function openRef(e) {
        setCheckOpen((el) => {
            return linkRef.current.map((item, index) => {

            if(item.contains(e.target))
            {
                return el[index] ? false : true
            }
            return false
        })
        })
    }


    useEffect(()=> {
        
        (async()=> {
            const {data} = await Axios({
                url: '/articles', 
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            fetchRef.current = data
        })()
    }, [])

    return(
        <section className={container}>
            <div className={navlist_wrapper}>
                <ul className={link_list}>
                    {ctx.panelOpen && fetchRef.current.map((listItem, index) => {
                        return (

                            <motion.li 
                            onClick={(openRef)}
                            ref={(ref) => linkRef.current[index] = ref}
                            className={list_item}
                            key={listItem.id} 
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: 30
                            }}
                            transition ={{
                                duration: .3,
                                delay: .3+(.1*index)
                            }}>
                                <div 
                                className={drop_container}
                                >
                                    <div 
                                    className={drop_inner}
                                    >
                                        <div className={dropdown_header}>{listItem.title}</div>
                                        {checkOpen[index] 
                                        ? <KeyboardArrowUpIcon style={{ fill: '#fff'}}/>
                                        : <KeyboardArrowDownIcon style={{ fill: '#fff'}} />
                                    }
                                    </div>
                                </div>

                                {checkOpen[index] &&
                                <motion.div 
                                className={active_container}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 30, 
                                }}

                                transition ={{
                                    duration: .4,
                                    delay: .1
                                }}
                                >
                                    {listItem.links && listItem.links.map(links => {
                                        return (
                                            <Link 
                                            key={links.title} 
                                            onClick={() => ctx.setOpen()} 
                                            className={active_links} 
                                            to={links.path}>{links.title}
                                            </Link>
                                        )})
                                    }
                                </motion.div>}
                            </motion.li>
                        )
                    })}
                </ul>
            </div> 
        </section>
    )
}

export default Navlist
