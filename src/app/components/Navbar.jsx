"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaCross, FaHamburger } from 'react-icons/fa'
import { SidebarContext } from '../providers'
import Cart from './Cart'

export default function Navbar() {
    const [hide, setHide] = useState(false)
   
    const { amount } = useContext(SidebarContext)
    const { cart,setCart } = useContext(SidebarContext)

    function showNav() {
        setHide(!hide)
    }

    function showCart(){
        setCart(!cart)
    }

    return (
        <nav className='bg-blue-700 text-white flex sm:flex-row flex-col justify-between items-center'>
            <div className='flex flex-row justify-between items-center sm:gap-0 gap-[400px]'>

                <ul className='flex flex-row justify-around items-center h-[10vh]'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <Cart />
                </ul>

                <ul className='sm:hidden cursor-pointer'>
                    <li onClick={showNav}>
                        <FaHamburger className={hide ? 'hidden' : 'block'} />
                        <FaCross className={!hide ? 'hidden' : 'block'} />
                    </li>
                </ul>
            </div>

            <ul className={hide ? 'absolute right-0 top-14 sm:top-0 bg-[#0066ffb7] sm:bg-transparent sm:flex sm:gap-5 sm:justify-end sm:items-center block h-[70vh] sm:h-[10vh] w-[80%] text-right px-12' : 'sm:relative hidden sm:flex sm:flex-row gap-5 pr-5 sm:items-center h-[10vh]'}>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/courses'>Courses</Link>
                </li>
                <li>
                    <Link href='/login'>Log In</Link>
                </li>
                <li onClick={showCart} className='cursor-pointer'>
                    <span>Cart({amount})</span>
                </li>
            </ul>
        </nav>
    )
}
