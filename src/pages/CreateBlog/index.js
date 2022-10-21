import React from "react";
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
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="blog-post">
          <p>Content Create Blog</p>
          <Input label="Post Title" />
          <Upload />
          <TextArea />
          <Gap height={20} />
          <div className="button-action">
            <Button title="save" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
