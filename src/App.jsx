import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import Book from "./pages/book/Book";

import BookLibrary from "./pages/book/Library";
import { useState, useEffect } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  // const { getAll } = BooksAPI();
  // useEffect(() => {
  //   getAll();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout open={open} setOpen={setOpen} />}>
          <Route index element={<Home open={open} setOpen={setOpen} />} />
          <Route path="/book" element={<Book setOpen={setOpen} />} />
          <Route path="/book/library" element={<BookLibrary />} />
          {/* <Route path="/book/members" element={<BookMembers />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
