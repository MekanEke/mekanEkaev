import { Link, useNavigate } from "react-router-dom";
import "./book.css";
import { LeftOutlined } from "@ant-design/icons";
import Library from "./Library";

const Book = ({ setOpen }) => {
  const navigate = useNavigate();
  function back() {
    navigate("/");
    setOpen(true);
    console.log("asdasd");
  }
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "-40px" }}>BOOKS</h1>
      <div
        style={{
          borderTop: "1px solid gray",
          padding: "30px 10px 0px 0px",
          fontSize: "30px",
          fontWeight: "300",
        }}
      >
        <Link className="icon" onClick={() => back()}>
          <LeftOutlined />
        </Link>{" "}
        <br />
        <div className="linklar">
          <Link to="/book/library"> Library</Link> <br />
          <Link to="/menbers"> Members</Link>
          <br />
          <Link to="/bookcross"> Bookcross</Link>
          <br />
          <Link to="/faqs"> FAQs</Link>
          <br />
        </div>
        {/* <Books/> */}
      </div>
    </>
  );
};

export default Book;
