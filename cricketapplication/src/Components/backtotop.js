import react from "react";
import { useState, useEffect } from "react";

export default function Backtotop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <div
          className="rn-progress-parent"
          style={{
            opacity: "1",
            visibility: "visible",
            // position: "absolute",
            // bottom: "0px",
          }}
          onClick={scrollToTop}
        >
          <i className="fa fa-home" />
          {/* <svg
            className="rn-back-circle svg-inner"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
           
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg> */}
        </div>
      )}
    </>
  );
}
