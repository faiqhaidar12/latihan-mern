import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button, Footer, Gap, Header } from "../../components";
import { useSelector } from "react-redux";

import "./home.scss";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const stateGlobal = useSelector((state) => state);
  console.log("State Global :", stateGlobal);
  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts?page=1&perPage=6")
      .then((result) => {
        console.log("Data Api", result.data);
        const responseApi = result.data;

        setDataBlog(responseApi.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  let navigate = useNavigate();
  const ButtonClick = () => {
    navigate("/create-blog");
  };
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="home-page-wrapper">
          <div className="create-wrapper">
            <Button title="create blog" onClick={ButtonClick} />
          </div>
          <Gap height={20} />
          <div className="content-wrapper">
            {dataBlog.map((blog) => {
              return (
                <BlogItem
                  key={blog._id}
                  image={`http://localhost:4000/${blog.image}`}
                  title={blog.title}
                  body={blog.body}
                  author={blog.author.name}
                  date={blog.createdAt}
                />
              );
            })}
          </div>
          <div className="pagination">
            <Button title="Previous" />
            <Gap width={20} />
            <Button title="Next" />
          </div>
          <Gap height={20} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
