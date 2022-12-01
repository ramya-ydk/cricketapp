import React from "react";
import { Card, CardBody, CardTitle, Button, CardText, Badge } from "reactstrap";

const TournamentDisplayCard = ({ props }) => {
  let { image, tournamentName, venue, startDate, endDate } = props;

  return (
    <>
      <style jsx="true">
        {`
          .container {
            padding: 0px;
            // width: 100%;
            color: crimson;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
              rgba(0, 0, 0, 0.05) 0px 5px 10px;
            cursor: pointer;
            margin-top: 20px;
            border: none;
            border-radius: 10px;
          }
          .cardContentBody {
            padding: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .cardContentBody:hover {
            background-color: #dee2e636;
          }
          .sideHeading {
            font-size: 13px;
            text-transform: uppercase;
            line-height: 1.1em;
            color: brown;
          }
          .content {
            color: darkblue;
            font-size: 13px;
            margin-left: 5px;
            line-height: 1.1em;
            word-break: break-all;
          }
          .title {
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            // word-wrap: break-word;
          }
          .Image {
            width: 100%;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
          }
          .img-hover-zoom {
            overflow: hidden; /* Removing this will break the effects */
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .img-hover-zoom img {
            transition: transform 0.2s ease;
          }
          .img-hover-zoom:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
      <Card className="container">
        <div className="img-hover-zoom">
          <img
            alt="Card cap"
            src={image || "https://picsum.photos/318/180"}
            className="Image"
          />

          <CardBody className="cardContentBody">
            <CardTitle className="title">{tournamentName || "---"}</CardTitle>
            <div style={{ display: "flex" }}>
              <CardText className="sideHeading">Start Date:</CardText>
              <CardText className="content">
                {startDate || "---"}
                {new Date().toLocaleDateString() >= startDate &&
                new Date().toLocaleDateString() <= endDate ? (
                  <Badge style={{ marginLeft: "10px" }} color="primary" pill>
                    on Going
                  </Badge>
                ) : null}
              </CardText>
            </div>
            <div style={{ display: "flex" }}>
              <CardText className="sideHeading">Venue:</CardText>
              <CardText className="content">{venue || "---"}</CardText>
            </div>
            <div>
              <Button outline>
                {new Date().toLocaleDateString() < startDate
                  ? "Click To Register"
                  : new Date().toLocaleDateString() > endDate
                  ? "View Result"
                  : "Click To Know More"}
              </Button>
            </div>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default TournamentDisplayCard;
