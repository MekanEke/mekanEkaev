import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
// import Home from "../../Layout";

const BurgerMenu = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="white"
        style={{
          color: "rgba(77, 80, 108, 1)",
          marginTop: "10px",
          marginLeft: "-8px",
        }}
        onClick={showDrawer}
      >
        <MenuOutlined />
      </Button>

      <Drawer placement="left" onClose={onClose} open={open}>
        <div className="burger">
          <Link className="burger" to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link className="burger" to="/" onClick={() => setOpen(false)}>
            Sign up
          </Link>
          <Link className="burger" to="/book" onClick={() => setOpen(false)}>
            BOOK
          </Link>
          <Link className="burger" to="/book" onClick={() => setOpen(false)}>
            ABOUT US
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default BurgerMenu;
