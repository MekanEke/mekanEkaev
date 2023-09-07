import { useEffect, useState } from "react";
import axios from "axios";
import s from "./Books.module.css";
import BASE_URL from "../../../config/config";
const Books = () => {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await axios
        .get(`${BASE_URL}/book/getBooks?listNumber=1`)
        .then((resp) => {
          return resp;
          // allPersons = resp.data;
          // setAppState(allPersons);
          // console.log(appState);
        });
      setAppState(response.data);
    }
    getBooks();
  }, []);
  return (
    <div className={s.books}>
      {appState.map((item) => {
        return (
          // <div key={item.bookId} >
          <div className={s.content} key={item.bookId}>
            <img src="/public/LibraryBooks/image 2.png" alt="" />

            <div className={s.block}>
              <div
                className={
                  item.bookStatus === "Rented"
                    ? s.rentedStrong
                    : s.availableStrong
                }
              >
                {item.bookStatus}
              </div>

              <div className={s.parag}>
                <p>{item.bookAuthor}</p>
              </div>
              <div className={s.span}>
                <span>{item.bookName}</span>
              </div>
              <div className={s.bookID}>
                <div className={s.boocIcon}>
                  <img src="/public/LibraryBooks/Vector1.png" alt="" />
                </div>
                <div className={s.blockFlex}>
                  <div className={s.bookIdP}>
                    <h5>Book ID</h5>
                  </div>
                  <div className={s.id}>
                    <p>{item.bookId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default Books;
