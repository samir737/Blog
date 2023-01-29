import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full bg-white text-gray-900 '>
        <div className='max-w-6xl mx-auto px-6 xl:px-o flex items-center justify-between py-2'>

        <div className=''>
            <h2 className='text-xl font-bold'>CHAD<span className='text-yellow-500'>BLOG</span> </h2>
        </div>
        <nav className=''>
            <ul className='flex items-center gap-6'>
                <Link  className='text-md font-semibold capitalize hover:text-yellow-500 duration-200 transition-all ' href='/'>Home</Link>
                <Link className='text-md font-semibold capitalize hover:text-yellow-500 duration-200 transition-all '  href='/blog'>Blog</Link>
                <Link  className='text-md font-semibold capitalize hover:text-yellow-500 duration-200 transition-all ' href='/contact'>Contact</Link>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Navbar