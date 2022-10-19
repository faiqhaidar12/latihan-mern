import React from "react";
import { RegisterBg } from "../../../assets";

import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Ex anim est consectetur ad esse veniam enim tempor eiusmod elit.
          Cillum consectetur amet mollit est culpa cupidatat occaecat nostrud
          commodo tempor sunt id exercitation excepteur. Culpa culpa in est
          proident velit magna culpa veniam dolor commodo ea.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
