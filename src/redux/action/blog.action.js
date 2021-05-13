import { createAction } from 'redux-actions';

export const BlogActionTypes = {
    ADD_BLOG:"adding the blog.",
    EDIT_BLOG:"editing the blog",
    DELETE_BLOG:"deleting the blog",
    LIKE_BLOG:'liking the blog',
}

export const addBlog = createAction(BlogActionTypes.ADD_BLOG);
export const editBlog = createAction(BlogActionTypes.EDIT_BLOG)
export const deleteBlog = createAction(BlogActionTypes.DELETE_BLOG);
export const likeBlog = createAction(BlogActionTypes.LIKE_BLOG);
 