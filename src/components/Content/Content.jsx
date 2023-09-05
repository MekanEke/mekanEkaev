// import Carousel from "../Carousel/Carusel";
import Carusel from "../Carousel/Carusel";
import st from "./Content.module.css";

export const Content = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 240, 215, 1)",
      }}
      className={st.content}
    >
      <div className={st.readtBook}>
        <h1> Read books Share books</h1>
      </div>
      <div className={st.image}>
        <p>First bookcrossing corner in IUHD</p>
        <img src="/public/firstPage/Fill 403.png" alt="bookPhoto" />
      </div>

      <Carusel />
    </div>
  );
};
