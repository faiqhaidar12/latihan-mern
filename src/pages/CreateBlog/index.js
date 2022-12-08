import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { setForm, setImgPrev, setToApi } from "../../config/redux/action";

import "./createblog.scss";

const CreateBlog = () => {
  const { form, imgPrev } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    setToApi(form);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPrev(URL.createObjectURL(file)));
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
            onChange={(e) => dispatch(setForm("title", e.target.value))}
          />
          <Upload onChange={(e) => onImageUpload(e)} img={imgPrev} />
          <TextArea
            value={body}
            onChange={(e) => dispatch(setForm("body", e.target.value))}
          />
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
