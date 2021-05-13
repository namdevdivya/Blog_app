import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Card from "react-bootstrap/Card";
import { Button, Badge } from "react-bootstrap";
import { deleteBlog, likeBlog } from "../../redux/action/blog.action";
import { Link } from "react-router-dom";
import moment from "moment";
import "./blogListing.css";

const BlogItem = ({ blog, index }) => {
  const dispatch = useDispatch();
  const tags = blog.tags;
  let description = blog.description;

  description = description.substring(3, description.length - 5);
  console.log(blog.currentDateTime);

 const a = moment.utc("2021-04-07 13:26:24").local().startOf('seconds').fromNow()
 console.log(a);
  // const dateTime = blog.currentDateTime;
  // console.log(dateTime);
  // const dateFormate = (dateTime) => {
  //   let time = moment(dateTime);
  //   console.log(time, "time");
  //   if (moment().diff(time, "hours") < 10) {
  //     let date = moment(dateTime, "YYYY-MM-DDTHH:mm:ss.SSSSZ");
  //     console.log(date, "date");
  //     var fromNow = date.fromNow();
  //     console.log(fromNow, "fromNow");
  //     return `last Updated s at ${time.format("hh:mm A")}`;
  //   } else {
  //     let date = moment(dateTime, "YYYY-MM-DDTHH:mm:ss.SSSSZ");
  //     return `${date.format("MM-DD-YYYY")} , at ${time.format("hh:mm A")}`;
  //   }
  // };

  // console.log(dateFormate(dateTime));

  const handleLike = (index) => {
    dispatch(
      likeBlog({
        index,
      })
    );
  };

  return (
    <div>
      <div className="p-3">
        {blog.isFavourite}
        {blog.isFavourite === false ? (<div className="iconDesign">
          <Button onClick={() => handleLike(index)} >
            <i className="bi bi-heart"></i>
          </Button></div>
        ) : (

          <div className="iconDesign"><Button onClick={() => handleLike(index)}>
            <i className="bi bi-heart-fill"></i>
          </Button></div>
        )}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="blogImage"
            variant="top"
            src={"assets/img.cms"}
          ></Card.Img>

          <Card.Body>
            <div className="d-flex">
              <Card.Title>{blog.title}</Card.Title>
            </div>
            <div className="d-flex">
              <Card.Title>{blog.category}</Card.Title>
            </div>
            <div className="d-flex">
              <div className="tagDesigns">
                {tags.map((tag, index) => {
                  return (
                    <h6>
                      <Badge variant="secondary" className="mr-2" key={index}>
                        {tag}
                      </Badge>
                    </h6>
                  );
                })}
              </div>
            </div>
            <div>
              <h5>What I Love About It :</h5>
              <ReactReadMoreReadLess
                charLimit={250}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {description}
              </ReactReadMoreReadLess>
            </div>
            <div className="btnDesigns">
              <Button className="btn btn-light text-success mr-2">
                <Link to={`/blog/edit/${index}`}>Edit Blog</Link>
              </Button>
              <Button
                className="btn btn-light text-danger"
                onClick={() => dispatch(deleteBlog(blog.id))}
              >
                Delete Blog
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BlogItem;

//////////////

//  date: '2012-04-23T18:25:43.511Z',
