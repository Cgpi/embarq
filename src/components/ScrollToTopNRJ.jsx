// use this when us switch back to router

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTopNRJ() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant"
//     });
//   }, [pathname]);

//   return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopHashNRJ() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"   // safer when using GSAP / pinned sections
    });
  }, [location.pathname]);

  return null;
}