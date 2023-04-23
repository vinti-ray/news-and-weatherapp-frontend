import axios from "axios";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faEye,
  faThermometerEmpty,
  faThermometerFull,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./new.css";

function HomePage() {
  const [city, setCity] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [list, setList] = useState();
  const [News, setNews] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [inputbox, setInputbox] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const API_KEY = "8b26c5340b0d42b29b4188a57866dcfc";
      const API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setCity(data.results[0].components.city))
        .catch((error) => console.error(error));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (city) {
      localStorage.setItem("city", city);

      axios
        .get(`http://localhost:3006/weather/${city}`)
        .then((e) => {
          console.log(e.data.data);
          setList(e.data.data);
          if(e.data.message=="Request failed with status code 404"){
            alert("no city found")
          }
        })
        .catch((e) => alert(e));
    }

    const unixTimestamp = Date.now();
    const formattedTime = new Date(unixTimestamp).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    });
    setDate(formattedTime);
    const today = new Date();
    const options = { month: "short", day: "numeric", weekday: "short" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setTime(formattedDate);
  }, [city]);

  const HandleSubmit = (e) => {
    // console.log("hii");
    e.preventDefault();
    setCity(inputbox);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px 20px 0px",
        }}
        className="search"
      >
        <Form className="d-flex" onSubmit={HandleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{
              width: "130%",
              borderRadius: "10px",
              borderColor: "aqua",
              border: "2px solid #ccc",
              boxShadow: "5px 5px 5px 5px rgba(13, 129, 218, 0.5)",
              marginRight:"20px"
            }}
            value={inputbox}
            onChange={(e) => setInputbox(e.target.value)}
          />{" "}
          <Button
            variant="warning"
            style={{ borderRadius: "10px" }}
            type="submit"
          >
            Search...
          </Button>
        </Form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="wethbox"
      >
        <Card className="weatherbox">
          <Card.Body>
            <div className="header">
              <div className="temper">
                <img
                  src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956422.jpg"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                />
                <h2>{city}</h2>
              </div>

              <div>
                <p>{time}</p>
                <p>{date}</p>
              </div>
            </div>
            <hr color="black" size="4" width="100%"></hr>

            <div className="headerTwo">
              <div className="temper">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-xmychJEhgQU7FtlECTBY_6uHrpX7_iZwTwlYFLirYGRnkPCS"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                />
                <h1 className="temp">{list ? list.temp : "Loading..."}</h1>
              </div>

              <h3> Feels Like: {list ? list.feels_like : "Loading..."}</h3>
            </div>
            <h4>{list ? list.description : "Loading..."}</h4>
            <br />
            <div>
              <Row>
                <Col>
                  <h6>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTint}
                      size="1x"
                      color="blue"
                    />{" "}
                    Humidity: {list ? list.humidity : "Loading..."}
                  </h6>
                </Col>
                <Col>
                  <h6>
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="1.5x"
                      color="blue"
                    />{" "}
                    Visibility: {list ? list.visibility : "Loading..."}
                  </h6>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>
                    <FontAwesomeIcon
                      icon={faThermometerEmpty}
                      size="1.5x"
                      color="blue"
                    />{" "}
                    Min Temp: {list ? list.tempMin : "Loading..."}
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <FontAwesomeIcon
                      icon={faThermometerFull}
                      size="1.5x"
                      color="blue"
                    />{" "}
                    Max Temp: {list ? list.tempMax : "Loading..."}
                  </h6>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>
                    <FontAwesomeIcon icon={faSun} size="1x" color="orange" />{" "}
                    Sun Rise:{" "}
                    {list
                      ? new Date(list.sunrise).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "numeric",
                        })
                      : "Loading..."}
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <FontAwesomeIcon icon={faMoon} size="1x" color="orange" />{" "}
                    Sun Set:{" "}
                    {list
                      ? new Date(list.sunset).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "numeric",
                        })
                      : "Loading..."}
                  </h6>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
}
export default HomePage;
