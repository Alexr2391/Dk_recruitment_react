import React, {createContext, useState} from 'react'

const GlobalContext = createContext({
    panelOpen : false,
    setOpen : () => {} 
})


export const GlobalContextProvider = ({children}) => {
    const [open, setOpen] = useState(false)

    function setOpenPanel() {
        return open 
        ? setOpen(false)
        : setOpen(true)
    }

    const context = {
        panelOpen : open,
        setOpen : setOpenPanel
    }

    return(
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext

