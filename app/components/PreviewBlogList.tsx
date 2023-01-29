'use client'
import { usePreview } from "../../lib/sanity.priview";
import BlogList from "./BlogList";
import React from 'react'

type Props={
  query:string
}

const PreviewBlogList = ({query}:Props) => {
  const posts=usePreview(null,query)
  console.log("loading ......." +posts);
  
  return (
    <BlogList posts={posts} />
  )
}

export default PreviewBlogList