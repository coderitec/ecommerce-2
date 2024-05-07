import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>this is Home</h2>
      <p><Link href='/about'>about page</Link></p>
    </div>
  )
}
