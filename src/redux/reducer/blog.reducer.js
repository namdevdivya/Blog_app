import { handleActions } from 'redux-actions';
import { BlogInitialStates } from '../state/blog.state';
import { BlogActionTypes } from '../action';

export const blogReducer = handleActions({
    [BlogActionTypes.ADD_BLOG]:(state, action) => (
   [...state, action.payload]
   ),
    [BlogActionTypes.EDIT_BLOG]:(state , action) =>{
        let newState =  [...state];
        console.log(newState  ,"newState");
        let index = action.payload.index;
        for (let i = 0; i < newState.length; i++) {  
          if (newState[i].index === action.payload.index) {
            break;
          }
        }
        if (index !== -1) {
            console.log(index,"index");
          newState[index] = action.payload;
          console.log(newState);
          return newState;
        }
    
    },
    [BlogActionTypes.DELETE_BLOG]:(state, action) => {
        let newState = [...state];
        
        console.log(newState);
        newState = newState.filter((blog) => blog.id != action.payload);
        return newState;
    },
    [BlogActionTypes.LIKE_BLOG]:(state, action) => {
      let newState = [...state];
      let index = action.payload.index;
      newState[index] = {...newState[index] , isFavourite : true};
      return newState;
  },  
},BlogInitialStates)




