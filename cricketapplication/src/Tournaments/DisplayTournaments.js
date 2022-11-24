import React from "react";
import CarouselComponent from "../Components/Carousel";

const DisplayTournaments = () => {
  const Tournaments = [
    {
      src: "https://static.toiimg.com/thumb/msid-69797058,width-1070,height-580,imgsize-284116,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      altText: "CSK vs MI ",
      caption: "CSK vs MI ",
      key: 1,
    },
    {
      src: "https://static.toiimg.com/thumb/msid-94081691,width-1070,height-580,imgsize-38066,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      altText: "RCB vs DC",
      caption: "RCB vs DC",
      key: 2,
    },
    // {
    //   src: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1582957856/1582957855.jpg",
    //   altText: "KKR vs RR",
    //   caption: "KKR vs RR",
    //   key: 3,
    // },
  ];

  const getKey = (key) => {
    console.log(key, "keys");
  };
  return (
    <>
      <div style={{}}>
        <CarouselComponent images={Tournaments} getTheImgKey={getKey} />
      </div>
    </>
  );
};

export default DisplayTournaments;
