import { createContext, useState } from "react";

const sideBar = createContext()

const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const initialState = {
        isOpen,
        setIsOpen
    }

    return(
        <sideBar.Provider value={initialState}>
            {children}
        </sideBar.Provider>
    )
}

export {
    sideBar,
    SideBarProvider
}