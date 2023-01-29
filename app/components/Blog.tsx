'use client'

import Image from 'next/image'
import React from 'react'
import urlFor from '../../lib/urlFor'
import { Post } from '../../typings'

type Props={
  post:Post
}

const Blog = ({post}:Props) => {
  return (
    <div className=' cursor-pointer group relative rounded-md hover:-translate-y-1 duration-200 transition-all  shadow-sm shadow-yellow-400 h-auto '>
        <Image src={urlFor(post.mainImage).url()} alt='blog image' width={200} height={200} className="block w-full h-52 object-cover"/>   
        <div className='p-3 flex flex-col gap-2'>
            <div className='flex gap-3 items-center'>
              {post.categories.map(ct=>{
                return <h1 className='p-1 text-yellow-500' key={ct._id}> {ct.title} </h1>
              })}
            </div>
        <h1 className='text-xl font-bold uppercase'>{post.title}</h1>
        <div className='flex gap-4 items-center'>
            <Image src={urlFor(post.author.image).url()} width={25} height={25} alt="profile" className='rounded-full' />
            <p className='text-sm font-semibold text-gray-700 capitalize font=serif'>{post.author.name}</p>
            <p>{new Date().toLocaleDateString("en-US",{
              day:"numeric",
              month:"long",
              year:"numeric",
            })}</p>
        </div>
        <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab in pariatur quo dolorum consequuntur.</p>
        </div>    
    </div>
  )
}

export default Blog