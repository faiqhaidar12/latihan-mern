import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Upload,
  TextArea,
  Gap,
  Header,
  Footer,
} from "../../components";

import "./createblog.scss";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imgPrev, setImgPrev] = useState(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("title:", title);
    console.log("body:", body);
    console.log("img:", image);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("post berhasil:", res);
      })
      .err((err) => {
        console.log("err:", err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImgPrev(URL.createObjectURL(file));
  };

  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="blog-post">
          <p className="back" onClick={() => navigate("/")}>
            Kembali Ke Home
          </p>
          <p>Content Create Blog</p>
          <Input
            label="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Upload onChange={(e) => onImageUpload(e)} img={imgPrev} />
          <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
          <Gap height={20} />
          <div className="button-action">
            <Button title="save" onClick={onSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
