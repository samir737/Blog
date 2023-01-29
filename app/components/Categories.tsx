import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className='mt-2 mb-53 shadow-sm border-b-2'>
        <ul className='flex items-center gap-4'>
            <li>
                <button className='border-yellow-600 border-b-2 capitalize font-semibold ' >all posts</button>
            </li>
            <li>
                <button className='capitalize font-semibold ' >sports</button>
            </li>
            <li>
                <button className=' capitalize font-semibold ' >scholar</button>
            </li>
            <li>
                <button className='capitalize font-semibold ' >news</button>
            </li>
            <li>
                <button className='capitalize font-semibold ' >leaderships</button>
            </li>
           
        </ul>
    </div>
  )
}

export default Categories