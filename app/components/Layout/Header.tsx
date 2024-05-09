import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return(
    <header className='bg-black'>
        <nav className='container py-5 flex items-center justify-between'>
          <Image 
            width={200}
            height={92}
            src='/logo-harry-potter.png'
            alt={'Logo NBA'}         
          />
          <ul className='flex items-center gap-5 text-primary text-[1.2rem]'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/characters">Characters</Link>
            </li>
            <li>
              <Link href="/pages/about">About</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}