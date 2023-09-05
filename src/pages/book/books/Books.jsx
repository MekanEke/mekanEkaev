import s from "./Books.module.css";
const Books = () => {
  return (
    <>
      <div className={s.books}>
        <div className={s.content}>
          <img src="/public/modal/Property 1=Rented.png" alt="" />
          <div className={s.bookStatus}>
            <strong> bookstatus</strong>
          </div>
          <p>bookAuthor</p>
          <p>bookName</p>
        </div>
      </div>
    </>
  );
};

export default Books;
