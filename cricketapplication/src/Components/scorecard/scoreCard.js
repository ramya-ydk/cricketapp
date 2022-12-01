import React from "react";
import "./scorecard.css";

function ScoreCard() {
  return (
    <div className="scorecardContainer">
      <div className="scorecardHeading">
        <title>matchName</title>
        <div>
          <div> venue</div> <div>date</div>
          <span> team1</span> vs <span>team2</span>
        </div>

        <div className="tossWinner">
          tossWinner{" "}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>
      <div> Total score of team1</div>
      Batting : Team1
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">players</th>
              <th scope="col">In/Out</th>
              <th scope="col">overs</th>
              <th scope="col">runs</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">PLAYERS(DROPDOWN)</th>
              <td>IN</td>
              <td>6</td>
              <td>40</td>
              <td>3</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">PLAYERS(DROPDOWN)</th>
              <td>IN</td>
              <td>6</td>
              <td>40</td>
              <td>3</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
      Batting : Team2
      <table class="table">
        <thead>
          <tr>
            <th scope="col">BOWLER NAME</th>
            <th scope="col">WICKET</th>
            <th scope="col">WIDE </th>
            <th scope="col">NO BALL</th>
            <th scope="col">SCORE</th>
            <th scope="col">4S</th>
            <th scope="col">6S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">bowler1</th>
            <td>3</td>
            <td>2</td>
            <td>5</td>
            <td>20</td>
            <td>5</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          class="btn btn-primary"
          style={{ margin: "10px" }}
        >
          one
        </button>
        <button
          type="button"
          style={{ margin: "10px" }}
          class="btn btn-secondary"
        >
          4s
        </button>
        <button
          type="button"
          style={{ margin: "10px" }}
          class="btn btn-success"
        >
          NoBall
        </button>
        <button type="button" style={{ margin: "10px" }} class="btn btn-info">
          wide
        </button>
        <button
          type="button"
          style={{ margin: "10px" }}
          class="btn btn-light"
        ></button>
      </div>
    </div>
  );
}

export default ScoreCard;
