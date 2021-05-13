import React,{useState} from "react";
import { useParams } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import BlogForm from "../../components/blogform";

import { editBlog } from "../../redux/action/blog.action";


export const EditBlog = () => {
    let { index } = useParams();
    console.log(index,"index");
    const blogs = useSelector(state => state)
     const blog= blogs.blogReducer;
    const blogData = blog[index]
    
    const dispatch = useDispatch();

  
    const [title, setTitle] = useState(blogData.title);
  const [category, setCategory] = useState(blogData.category);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState(blogData.description);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const category1 = category.value;
    console.log(tags);
    dispatch(
      editBlog({
          index,
        title,
        tags,
        category: category1,
        description
      })
    );
  };


  const onEditorChange = (evt) => {
    console.log(evt);
    setDescription(evt.editor.getData());
    console.log(description);
  };

  const selectedTags = (tags) => {
    setTags(tags);
    console.log(tags);
  };

  const handleChange = (e) => {

    setTitle(e.target.value);
    console.log(`Option selected:`, category.value);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div>
      <BlogForm 
       title={title} 
       category={category} 
       tags={tags} 
       description ={description} 
       handleSubmit={handleSubmit} 
       handleChange ={handleChange}
       onEditorChange={onEditorChange}
       selectedTags={selectedTags}
       handleCategory ={handleCategory}
      />
    </div>
  );
};
