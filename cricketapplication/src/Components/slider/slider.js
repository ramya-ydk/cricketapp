import React, { useEffect, useState } from "react";
// import Slider from "./assets/js/vendor/slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";
import SingleCard from "../card/card";
import { Card } from "reactstrap";
import TournamentDisplayCard from "../card/tournamentDisplayCard";

export const CardData = [
  {
    image: "https://drop.ndtv.com/homepage/ndtv_sports/images/ipl.png",
    tournamentName: "Kovai Plays",
    venue: "Perks Ground",
    startDate: "11/30/2022",
    endDate: "12/6/2022",
  },
  {
    image: "https://drop.ndtv.com/homepage/ndtv_sports/images/ipl.png",
    tournamentName: "Kovai Plays",
    venue: "Perks Ground",
    startDate: "11/30/2022",
    endDate: "11/30/2022",
  },
  {
    image: "https://drop.ndtv.com/homepage/ndtv_sports/images/ipl.png",
    tournamentName: "Kovai Plays",
    venue: "Perks Ground",
    startDate: "11/30/2022",
    endDate: "12/1/2022",
  },
  {
    image: "https://drop.ndtv.com/homepage/ndtv_sports/images/ipl.png",
    tournamentName: "Kovai Plays",
    venue: "Perks Ground",
    startDate: "11/30/2022",
    endDate: "11/30/2022",
  },
];

export const Testimonial = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
                            <div className="thumbnail">
                              <div className="content">
                                <div>
                                  <TournamentDisplayCard props={item} />
                                </div>
                              </div>
                            </div>
                          </div>
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
    </>
  );
};
