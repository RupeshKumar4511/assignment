import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext=createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme=()=>useContext(ThemeContext)

export default function ThemeProvider({children}){
  const [theme,setTheme]=useState(()=>localStorage.getItem('theme')||'dark')

  useEffect(()=>{
    document.documentElement.classList.toggle('dark',theme==='dark')
    localStorage.setItem('theme',theme)
  },[theme])

  const value={theme,toggle:()=>setTheme(t=>t==='dark'?'light':'dark')}
  
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}