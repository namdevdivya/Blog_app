import React from 'react'
import {useSelector} from 'react-redux'
import BlogList from '../../components/bloglisting/index'

 const BlogListing = () => {
    const blogs = useSelector(state => state)
    console.log(blogs);
    const blog = blogs.blogReducer;
    return (
        <div>
            <BlogList blog={blog}/>
        </div>
    )
}
 export default BlogListing