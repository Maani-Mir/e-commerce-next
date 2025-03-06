// "use client";

// import React, { useEffect, useState } from "react";
// import Image1 from "../../../public/1.jpg";
// import Image2 from "../../../public/2.jpg";
// import Image3 from "../../../public/3.jpg";
// import Image4 from "../../../public/4.jpg";
// import Image from "next/image";

// const images = [
//   {
//     imgURL: Image1,
//     imgAlt: "img-1",
//   },
//   {
//     imgURL: Image2,
//     imgAlt: "img-2",
//   },
//   {
//     imgURL: Image3,
//     imgAlt: "img-3",
//   },
//   {
//     imgURL: Image4,
//     imgAlt: "img-4",
//   },
// ];

// export default function ImageSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // to handle automatic slide transition
//   useEffect(() => {
//     if (!isHovered) {
//       // if not hovered, start interval for automatic slide change
//       const interval = setInterval(() => {
//         slideNext();
//       }, 3000);

//       // when unmounts, clear the interval
//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [isHovered]);

//   // const slideNext = () => {
//   //   setActiveIndex((val) => {
//   //     if (val >= children.length - 1) {
//   //       return 0;
//   //     } else {
//   //       return val + 1;
//   //     }
//   //   });
//   // };

//   // const slideNext = () => {
//   //   setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   // };

//   const slideNext = () => {
//     setActiveIndex((prevIndex) => {
//       if (prevIndex >= images.length - 1) {
//         return 0;
//       } else {
//         return prevIndex + 1;
//       }
//     });
//   };

//   const slidePrev = () => {
//     setActiveIndex((prevIndex) => {
//       if (prevIndex <= 0) {
//         return images.length - 1;
//       } else {
//         return prevIndex - 1;
//       }
//     });
//   };

//   // const slidePrev = () => {
//   //   setActiveIndex(
//   //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
//   //   );
//   // };

//   // const slidePrev = () => {
//   //   setActiveIndex((val) => {
//   //     if (val <= 0) {
//   //       return children.length - 1;
//   //     } else {
//   //       return val - 1;
//   //     }
//   //   });
//   // };

//   const handleMouseOver = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <div
//         className="container__slider"
//         onMouseOver={handleMouseOver}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Image
//           src={images[activeIndex].imgURL}
//           alt={images[activeIndex].imgAlt}
//           width="0"
//           height="0"
//           layout="responsive"
//           style={{ width: "100%", height: "auto" }}
//         />
//         {/* {children.map((item, index) => {
//         return (
//           <div
//             className={"slider__item slider__item-active-" + (activeIndex + 1)}
//             key={index}
//           >
//             {item}
//           </div>
//         );
//       })}

//       <div className="container__slider__links">
//         {children.map((item, index) => {
//           return (
//             <button
//               key={index}
//               className={
//                 activeIndex === index
//                   ? "container__slider__links-small container__slider__links-small-active"
//                   : "container__slider__links-small"
//               }
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveIndex(index);
//               }}
//             ></button>
//           );
//         })}
//       </div> */}

//         <button className="slider__btn-next" onClick={slideNext()}>
//           {">"}
//         </button>
//         <button className="slider__btn-prev" onClick={slidePrev()}>
//           {"<"}
//         </button>
//       </div>
//     </div>
//   );
// }
