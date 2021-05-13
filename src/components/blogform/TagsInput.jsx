import React,{useState,useEffect} from "react";
import './style.css'


const TagsInput = (props) => {
    const [tags, setTags] = useState([]);
   
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

useEffect(() => {
    console.log(props.tags,'inside atg input useffect');
    if(props.tags && props.tags.length && !tags.length){
    setTags(props.tags)
    }
}, [props.tags])


    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    return (
        
        <div className="tags-input">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <i className="bi bi-x-circle-fill"
                         onClick={() => removeTags(index)} 
                        ></i>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                className="tagDesign"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
            />
        </div>
    );
};
export default TagsInput;