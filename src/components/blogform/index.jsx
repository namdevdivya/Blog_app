import React from "react";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import CKEditor from "ckeditor4-react";
import TagsInput from "./TagsInput";
import { Link} from "react-router-dom";
import { categoryOptions } from "../../config";
import {useParams} from 'react-router-dom'

const BlogForm = (props) => {
  const {index} = useParams();
  console.log(index);
  console.log(props, "props");
  console.log();
  return (
    <div className="container">
     {index ? <h1>Edit Your Blog Here!!</h1> : <h1>Add Your Blog Here!!</h1>} 
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={props.title}
            placeholder="Enter Blog Title"
            className="titleDesign"
            onChange={props.handleChange}
          />
        </Form.Group>
      </Form>

      <TagsInput selectedTags={props.selectedTags} tags={props.tags}/>
      <label>Choose Category</label>
      <div className="mb-5">
        <Select
          value={props.category}
          onChange={props.handleCategory}
          options={categoryOptions}
        />
      </div>
      <CKEditor data={props.description} onChange={props.onEditorChange} />
      <div className="btnDesign">
        <Button className="btn btn-light mt-3 " onClick={props.handleSubmit}>
          <Link to="/">{index ? 'Update' : 'Add'} </Link>
        </Button>
      </div>
    </div>
  );
};
export default BlogForm;
