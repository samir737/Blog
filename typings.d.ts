import { Image } from "sanity"

interface Post extends Base{
    title:string
    slug:string
    body:Block[]
    author:Author
    categories:Category[]
    mainImage:Image
    description:string
}

interface Author extends Base{
    name:string
    slug:string
    image:Image
    bio:Blog[]
}

interface Image{
    _type:"image"
    Aasset:Reference
}
interface Reference {
    _ref:  string
    _type:"reference"
}

interface Slug{
    _type:"slug"
    current:string
}

interface Base {
    _createAt:string
    _rev:string
    _id:string
    updateAt:string
    _type:string
}



interface Block {
    _key:string
    _type:'block'
    children:Span[]
    markDefs:any[]
    style:"normal"|"h1"|"h2"|"h3"|"h4"|"blockquote"

}

interface Span {
    _type:"span"
    _key:string
    marks:string[]
    text:string
}

interface Category extends  Base {
    description:string
    title:string
}

interface MainImage {
_type:"image"
asset:Reference
}

interface Title{
    _type:"title"
    current:string
}