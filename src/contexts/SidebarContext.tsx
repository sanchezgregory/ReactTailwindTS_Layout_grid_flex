import React, { createContext, useContext, useState } from "react"

type SidebarProviderProps = {
    children: React.ReactNode
}
type SidebarContextType = {
    isLargeOpen: boolean
    isSmallOpen: boolean
    toggle: () => void
    close: () => void
}
    
const SidebarContext = createContext<SidebarContextType | null>(null)

export function useSidebarContext() {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarProvider")
    }
    return context
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({children}) => {
    const [isLargeOpen, setIsLargeOpen] = useState(true)
    const [isSmallOpen, setIsSmallOpen] = useState(false)

    function isScreenSmall() {
        return window.innerWidth < 1024
    }
    function toggle() {
        if (isScreenSmall()) {
            setIsSmallOpen(!isSmallOpen)
        } else {
            setIsLargeOpen(!isLargeOpen)
        }
    }

    function close() {
        if (isScreenSmall()) {
            setIsSmallOpen(false)
        } else {
            setIsLargeOpen(false)
        }    
    }

    return (
    <SidebarContext.Provider value={{isLargeOpen, isSmallOpen, toggle, close}}>
      {children}
    </SidebarContext.Provider>
  )
}
