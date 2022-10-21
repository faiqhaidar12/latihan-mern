import React from "react";
import { Input, Button, Upload, TextArea, Gap } from "../../components";

import "./createblog.scss";

const CreateBlog = () => {
  return (
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
  );
};

export default CreateBlog;
