import { createClient } from "next-sanity";


export const projectId=process.env.NEXT_PUBLIC_PROJECT_ID!
export const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion=process.env.NEXT_PUBLIC_SANITY_API_VERSION


export const client =createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn:false
})

