import BurgerMenu from "../BurgerMenu/BurgerMenu";
import st from "./Header.module.css";
const Header = ({ open, setOpen }) => {
  return (
    <div className={st.header}>
      <BurgerMenu open={open} setOpen={setOpen} />
      <div className={st.image}>
        <img
          src="./../../public/firstPage/bookDot_logo.png"
          alt=""
          style={{
            flexDirection: "end",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
