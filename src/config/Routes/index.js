import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../../pages";
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";

import "./mainApp.scss";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/detail-blog:id" element={<DetailBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routess;
