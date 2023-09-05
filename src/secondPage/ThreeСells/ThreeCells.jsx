import React from "react";
import st from "./ThreeCells.module.css";
const ThreeCells = () => {
  return (
    <div className={st.ThreeCells}>
      <div className={st.Cells}>
        <div className={st.share}>
          <div className={st.share1}>
            <img src="/public/seconPage/ThreeCells/Frame 3233257.png" alt="" />
           
          </div>
        </div>

        <div className={st.discover}>
          <div className={st.discover2}>
            <img src="/public/seconPage/ThreeCells/Frame 3233258.png" alt="" />
           
          </div>
        </div>

        <div className={st.support}>
          <div className={st.support3}>
            <img src="/public/seconPage/ThreeCells/Frame 3233259.png" alt="" />
            
          </div>
        </div>
      </div>
      <div className={st.OurPlace}>
        <div className={st.OurPlaceImg}>
          <img src="/public/seconPage/ThreeCells/Group 69.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThreeCells;
