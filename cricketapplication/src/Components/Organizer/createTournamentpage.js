import React, { useEffect, useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";

const TournamentCreateForm = () => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState("");

  // useEffect(() => {
  //   console.log(textList);
  // }, []);

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextList([...textList, text]);
    console.log(textList);
  };
  return (
    <>
      <div
        style={{
          fontWeight: "medium",
          backgroundColor: "#c9c9ed",
          //   backgroundImage:
          //     "linear-gradient(to bottom, Transparent 0%,Transparent 50%,red 50%,red 100%)",

          textAlign: "center",
          fontSize: "20px",
          margin: "20px",
        }}
      >
        CreateTournament
      </div>
      <div
        style={{
          width: "85%",
          backgroundColor: "#d8d8e7",
          // position: "absolute",
          // top: "10%",
          margin: "auto",
          marginTop: "5s%",
          borderRadius: "10px",
        }}
      >
        {" "}
        <Form>
          {/* <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={handleChange}
              />
            </Col>
          </FormGroup> */}
          <FormGroup row>
            <Label for="tournamentName" sm={2}>
              TOURNAMENT NAME:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="tournamentName"
                id="tournamentName"
                placeholder="name"
                onChange={handleChange}
                value={text.tournamentName || ""}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="venue" sm={2}>
              VENUE:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="venue"
                id="venue"
                placeholder="venue"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="District" className="mr-sm-2">
              DISTRICT:
            </Label>
            <Input
              type="text"
              name="District"
              id="District"
              placeholder="District"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="venue" className="mr-sm-2">
              STATE:
            </Label>
            <Input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactEmail">contact Email</Label>

            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <Input
              type="email"
              name="email"
              id="contactEmail"
              placeholder="contact Email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactNumber">CONTACT NUMBER</Label>
            <Input
              type="number"
              name="contactNumber"
              id="contactNumber"
              placeholder="eg.8989898989"
              onChange={handleChange}
            />
          </FormGroup>

          {/* <FormGroup>
            <Label for="exampleSelect">TEAM1</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={handleChange}
            >
              <option> TEAM1</option>
              <option>TEAM2</option>
              <option>TEAM3</option>
              <option>TEAM4</option>
              <option>TEAM5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">TEAM2</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={handleChange}
            >
              <option> TEAM1</option>
              <option>TEAM2</option>
              <option>TEAM3</option>
              <option>TEAM4</option>
              <option>TEAM5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              onChange={handleChange}
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="sponserName">SPONSER NAMES</Label>
            <Input
              type="text"
              name="sponserName"
              id="sponserName"
              placeholder=""
              onChange={handleChange}
            />
          </FormGroup> */}

          <FormGroup>
            <Label for="instructions">INSTRUCTIONS</Label>
            <Input
              type="textarea"
              name="instructions"
              id="instructions"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">BANNER IMAGE</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={handleChange}
            />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <Button
            color="success"
            style={{ margin: "0% 40%" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default TournamentCreateForm;
