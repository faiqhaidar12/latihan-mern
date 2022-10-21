import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button, Footer, Gap, Header } from "../../components";

import "./home.scss";

const Home = () => {
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
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
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
