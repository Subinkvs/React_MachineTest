import React from "react";
import data from "./db.json";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Post() {
  return (
    <Carousel>
      <div>
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div>First name: {item.first_name}</div>
            <div>Last name: {item.last_name}</div>
            <div>Email: {item.email}</div>
            <div>Gender: {item.gender}</div>
          </div>
        ))}
      </div>
    </Carousel>
  );
}

export default Post;
