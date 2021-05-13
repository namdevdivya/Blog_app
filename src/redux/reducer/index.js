import { combineReducers } from "redux";
import { blogReducer } from "./blog.reducer";

export const rootReducer = combineReducers({
    blogReducer:blogReducer
})