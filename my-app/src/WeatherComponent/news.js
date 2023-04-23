import axios from "axios";


import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, NavLink } from "react-bootstrap";
import "./new.css"

function NewsPage() {
  const [city, setCity] = useState();
  const [News, setNews] = useState([]);
  const [inputbox, setInputbox] = useState("");



  useEffect(() => {
  let x=  localStorage.getItem("city")
  setCity(x)
    if (city) {
      axios
        .get(`http://localhost:3006/news/${city}`)
        .then((e) => {
          console.log(e.data.data);
          setNews(e.data.data);
        })
        .catch((e) =>{console.log(e.response.data.message); alert(e.response.data.message)});
    }else{
      axios
      .get(`http://localhost:3006/news/India`)
      .then((e) => {
        console.log(e.data.data);
        setNews(e.data.data);
      })
      .catch((e) => alert(e.response.data.message));
    }
  }, [city]);

  const HandleSubmit = (e) => {
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



    <div className="newsCard" style={{ display: "flex", justifyContent: "center" }}>
      <Card className="newsbox">
        <Card.Body>
        <ul>
      <h3>List</h3>
      {News.map((data, i) => (
        <li key={data._id}>
                <div style={{ display: "flex" }} className="wethbox">
          <div>
          <a href={data.url}>
            {i + 1}.
            
            <img src= {data.image?data.image:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  // borderRadius: "50%",
                  overflow: "hidden",
                }}/>
           
          </a>
           
          </div>
          <div className="marginNews"> <h5 >{data.title}</h5> <p>{data.description}</p></div>

          </div>
        </li>
      ))}
    </ul>
        </Card.Body>
      </Card>
     

      </div>
    </div>
  );
}
export default NewsPage;
