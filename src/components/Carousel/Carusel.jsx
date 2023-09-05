// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useState, useEffect } from "react";

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <LeftOutlined size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <RightOutlined size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//             {slides.map((p) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === p ? "p-2" : "bg-opacity-50"}
//             `}
//              />
//            ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Carousel } from "antd";
import st from "./Carusel.module.css";

const Carusel = () => {
  return (
    <div className={st.Carusel}>
      <Carousel style={{ textAlign: "center" }} autoplay dots={false}>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/1.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/2.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src=" /public/firstPage/Новая папка/3.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/4.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/5.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/6.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/7.png" alt="" />
        </div>
        <div className={st.CaruselImage}>
          <img src="/public/firstPage/Новая папка/8.png " alt="" />
        </div>
      </Carousel>

      <div></div>
    </div>
  );
};
export default Carusel;
