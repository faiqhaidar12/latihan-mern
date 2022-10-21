import React from "react";

import "./textarea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea {...rest} className="text-area"></textarea>
    </div>
  );
};

export default TextArea;
