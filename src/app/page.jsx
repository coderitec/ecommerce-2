"use client"
import Link from 'next/link'
import Cart from './components/Cart'


export default function Home() {

  return (
    <div>
      <Cart />
      <h2>this is Home</h2>
      <p><Link href='/about'>about page</Link></p>
    </div>
  )
}
