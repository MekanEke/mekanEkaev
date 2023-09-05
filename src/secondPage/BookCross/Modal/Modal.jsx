import "./modal .css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation}
      >
        <div className="modalImg">
          <img src="/public/modal/1_BookCrossing.png" alt="" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
