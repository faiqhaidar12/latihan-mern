import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MyApp = () => {
  return (
    <div>
      <p>Header</p>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-blog" element={<CreateBlog />}></Route>
        <Route path="/detail-blog" element={<DetailBlog />}></Route>
      </Routes>
      <p>Footer</p>
    </div>
  );
};

export default MyApp;
