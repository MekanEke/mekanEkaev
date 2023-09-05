import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Book from "./book/Book";

const MainLayout = ({ open, setOpen }) => {
  return (
    <div>
      <Header open={open} setOpen={setOpen} />

      <Outlet />
    </div>
  );
};

export default MainLayout;
