import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";

import "./blogitem.scss";

const BlogItem = (props) => {
  const navigate = useNavigate();
  const { image, body, title, author, date } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {author}- {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button title="Baca" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
