import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";

import "./blogitem.scss";

const BlogItem = () => {
  const navigate = useNavigate();
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
        <Gap height={20} />
        <Button title="Baca" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
