import { useState } from "react";
import st from "./BookCross.module.css";
import ThreeCells from "../ThreeСells/ThreeCells";
import Modal from "./Modal/Modal";
import ContAnima from "../ContactsAni/ContAnima";
import Footer from "../footer/Footer";
const BookCross = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={st.bookCross}>
      <div className={st.Crossing}>
        <div className={st.whatIs}>
          <h1>What is bookcrossing?</h1>
          <img src="/public/second page/Fill 404.png" alt="" />
        </div>
        <p>
          The idea of ​​Bookcrossing - Book Exchange - is not only to increase
          interest in reading, but also to create a friendly atmosphere among
          students. The concept of "Take a book, leave a book" helps to find
          like-minded people.
        </p>
        <button className={st.Cross} onClick={() => setModalActive(true)}>
          <img src="/public/seconPage/Vector.png" alt="" />
          <p>How to BookCross</p>
        </button>
        <Modal active={modalActive} setActive={setModalActive}></Modal>
      </div>
      <ThreeCells />
      <ContAnima />
      <Footer />
    </div>
  );
};

export default BookCross;
