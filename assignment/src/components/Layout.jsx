import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/useTheme'
const Layout = () => {
    const {theme} = useTheme()
    return (
        <div className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-blue-400 text-black' } font-[poppins] overflow-x-hidden`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
