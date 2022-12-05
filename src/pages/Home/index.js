import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button, Footer, Gap, Header } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log("page", page);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  };

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
            <Button title="Previous" onClick={previous} />
            <Gap width={20} />
            <p className="text-page">
              {page.currentPage} / {page.totalPage}
            </p>
            <Gap width={20} />
            <Button title="Next" onClick={next} />
          </div>
          <Gap height={20} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
