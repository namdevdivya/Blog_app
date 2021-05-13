import { createLogic } from "redux-logic";
import { BlogActionTypes, addBlog,deleteBlog } from "../action";
import {configureStore} from '../Store'


const editBlogLogic = createLogic({
   
  type: BlogActionTypes.EDIT_BLOG,
  
  async process({getState, action}, dispatch, done){    
    newBlogs = [...state];
    newBlogs[index] = action.payload;
        return newBlogs;
    
    
    dispatch(editBlog());
    done();         
  }
})


const deleteBlogLogic = createLogic({
   
  type: BlogActionTypes.DELETE_BLOG,
  
  async process({getState, action}, dispatch, done){    
    newBlogs = [...state];
    newBlogs = newBlogs.filter((blog) => blog.id != action.payload);
    return newBlogs;
    // const state = store.getState();
    // return  [...state,action.payload],
    dispatch(deleteBlog(blog.id));
    done();         
  }
})


export const AuthLogics = [
    addBlogLogic
]