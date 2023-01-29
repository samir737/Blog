import React from 'react'
import Categories from '../components/Categories'
import BlogList from './../components/BlogList'
import PreviewBlogList from './../components/PreviewBlogList'
import { previewData } from 'next/headers'
import {groq}  from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../components/PreviewSuspense'

const query =groq`
*[_type=="post"]{
  ...,
  author->,
  Categories[]->
} | order(_createdAt desc)
`

const Home = async() => {
  if (previewData()) {
    return <PreviewSuspense fallback={
      <div>loading ....</div>
    }>
   <PreviewBlogList query={query} />
    </PreviewSuspense>
  }

const posts=await client.fetch(query)


  return (
    <div>
      <Categories />
      <BlogList posts={posts} />
    </div>
  )
}

export default Home