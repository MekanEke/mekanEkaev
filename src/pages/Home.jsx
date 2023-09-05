// import {   Outlet } from "react-router-dom";
import { Content } from "../components/Content/Content";
import Header from "../components/header/Header";
import BookCross from "../secondPage/BookCross/BookCross";

const Home = ({ open, setOpen }) => {
  return (
    <>
      {/* <Header open={open} setOpen={setOpen} /> */}
      <Content />
      <BookCross />
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
