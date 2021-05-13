import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import BlogForm from "../../components/blogform";
import { categoryOptions } from "../../config";
import { addBlog,editBlog } from "../../redux/action/blog.action";
import { useParams } from "react-router-dom";



// Main Component for ADD and EDIT 
export const AddBlog = () => {
  //using useParams for geeting the index from the url
  const { index } = useParams();
 
  const blogs = useSelector((state) => state); // using useSelector for getting the state from redux store


  //Setting all the initial State

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();


  //using useEffect (as a componentDidUpdate) for setting all the state which we are getting from redux store
  useEffect(() => {
   console.log("inside useEffect ");
    const blog = blogs.blogReducer;
    const blogData = blog[index];
    console.log(blogData,'blogData');
   
    if(blogData){
    setTitle(blogData.title);
    setCategory(categoryOptions.filter(({label}) => label === blogData.category)[0] || null);
    setTags(blogData.tags);
    setDescription(blogData.description);
    }
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const category1 = category.value;
    if(index){
        dispatch(
            editBlog({
              index,
              title,
              tags,
              category: category1,
              description
            })
          );
    }else{
    dispatch(
      addBlog({
        title,
        tags,
        category: category1,
        description,
        isFavourite: false,
        currentDateTime : Date().toLocaleString(),
      })
    );
    }
  };

  const selectedTags = (tags) => {
    setTags(tags);
    console.log(tags);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    };

  const handleCategory = (category) => {
    setCategory(category);
  };

  const onEditorChange = (evt) => {
    setDescription(evt.editor.getData());
  };

  return (
    <div>
      <BlogForm
        title={title}
        category={category}
        tags={tags}
        description={description}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onEditorChange={onEditorChange}
        selectedTags={selectedTags}
        handleCategory={handleCategory}
      />
    </div>
  );
};

export default AddBlog;
