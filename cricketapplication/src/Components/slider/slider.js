import React, { useEffect, useState } from "react";
// import Slider from "./assets/js/vendor/slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";
import SingleCard from "../card/card";
import { Card } from "reactstrap";

export const CardData = [
  {
    name: "Nithila",
    degree: "3rd B.sc",
    college: "psgcas",
    feedBackId: 1,
    content:
      "I have got placed in Accenture, one of my dream companies. The reason I chose this platform was – it was simple and subscribing and taking tests was easier compared to other platforms ",
    rating: "5",
    img: "",
  },
  {
    name: "Sammer",
    degree: "B.E CS",
    college: "Hicas",
    feedBackId: 2,
    content:
      "Gaining confidence is more important for placements. I am happy that I chose ‘Test Your Metrics’ for my preparation. I got placed in my first interview.",
    rating: "4",
  },
  {
    name: "Ashwini",
    degree: "M.com",
    college: "ngp",
    feedBackId: 3,
    content:
      "I am placed in 3 companies; I took about 7 tests. Each test improved me to perform better than before. I have also suggested my junior to take up Test Your Metrics for their preparation",
    rating: "3",
  },
  {
    name: "Nivedha",
    degree: "B.sc CS",
    college: " psg krishnamal",
    feedBackId: 4,
    content:
      "I got placed in TCS & CTS. My batch was little nervous about online tests. That’s where I chose this platform. It was very simple to use, there were 9 practice tests. Each paper helped me improve my time management.",
    rating: "4",
  },
  {
    name: "Vijayalakshmi",
    degree: "B.sc CS",
    college: "psgcas",
    feedBackId: 5,
    content:
      "I am so so thankful to this platform Deloite was my dream company and I am placed in it now. Would be joining soon. Appearing for Deloite aptitude was easier only because I have taken ample tests and practiced. I wholeheartedly thank the entire team of Test Your Metrics ",
    rating: "5",
  },
  {
    name: "Kannan",
    degree: "B.Com",
    college: "psgcas",
    feedBackId: 6,
    content:
      "This practice test has given me more insights about my aptitude skill. How efficiently I should manage my timing and so on. I have improved myself after 6 tests. A non-maths student cracking aptitude wouldn’t have been easy without  this site. I am placed with Infosys and HCL.",
    rating: "4",
  },
];

export const Testimonial = () => {
  const [settings, setSettings] = useState({
    //

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <>
      <div className="main-wrapper">
        <div className="eedu-testimonial-area eduvibe-home-two-testimonial bg-color-white testimonial-card-box-bg edu-section-gap position-relative bg-image">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-12">
                <div
                  className="section-title text-center"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <span className="pre-title">HighLights</span>
                </div>
              </div>
            </div>

            <div
              className="edu-testimonial-activation testimonial-item-3 mt--40 edu-slick-button"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <Slider {...settings}>
                {CardData.map((item, index) => {
                  return (
                    <Slider key={index}>
                      <div className="testimonial-card-box">
                        <div className="inner">
                          <div className="client-info">
                            <div className="thumbnail"></div>
                            <div className="content">
                              <SingleCard />

                              {/* <div>Title</div> */}
                              {/* <h6 className="title">{item.name}</h6>
                              <span className="designation">{item.degree}</span> */}
                            </div>
                          </div>
                          {/* <div className="feedbackContent">
                            <p
                              className="description"
                              style={{
                                minHeight: 200,
                                maxHeight: 200,
                                overflowY: "scroll",
                                backgroundColor: "white",
                                color: "black",
                                fontFamily: "cursive",
                                fontSize: "smaller",
                                margin: "20px",
                              }}
                            >
                              {item.content}
                              <img src={item.img} />
                            </p>
                          </div>
                          <div className="rating">
                            {Array.from({ length: Math.ceil(item.rating) }).map(
                              (star, index) => (
                                <i className="on icon-Star" key={index}></i>
                              )
                            )}
                            {Array.from({
                              length: 5 - Math.floor(item.rating),
                            }).map((offStar, index) => (
                              <i className="off icon-Star" key={index}></i>
                            ))}
                          </div> */}
                        </div>
                      </div>
                    </Slider>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"  />
        </svg>
      </div> */}
    </>
  );
};
