import React from "react";
import { RegisterNew } from "../../assets";

import "./detailblog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterNew} alt="thumb" />
      <p className="blog-title">Title Post</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Sunt occaecat veniam proident reprehenderit proident nisi ea et
        voluptate. Et eu dolore tempor voluptate ex. Officia et reprehenderit
        qui ad et do ipsum labore deserunt irure excepteur culpa. Ut Lorem sint
        laboris irure. Ullamco sunt dolor enim aute. Sint reprehenderit ullamco
        enim tempor magna.
      </p>
    </div>
  );
};

export default DetailBlog;
