import React from 'react'
import BlogItem from './BlogItem'
import {Link} from 'react-router-dom'
import './blogListing.css'

 const BlogList = (props) => {
 console.log(props,"props");
    return (
        <div className="container">
           <h1 className="blogText">Welcome to the Blog</h1>
        <div className="btnDesign">
            <Link to='/blog/add'>Add Your Blog Here!!</Link>
            </div>
            <div className="blog container">
            {
            props.blog.map((blog,index) => {
                 return (<div>
                     
                     <BlogItem key={blog.id} 
                        index={index} blog={blog}
                        />
                 </div>
                 );
             })
         }
         </div>
        </div>
    )
}

export default BlogList
