import React from 'react'
import { Post } from '../../typings'
import Blog from './Blog'

type Props={
  posts:Post[]
}


const BlogList = ({posts}:Props) => {
  
  return (
    <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
      {posts&&posts.map(p=>{
        
        return (<div key={p._id}  >
          <Blog post={p}/>
                  </div> )
      }) }
    </div>
  )
}

export default BlogList