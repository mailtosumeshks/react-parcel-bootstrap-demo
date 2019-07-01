import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Container, Row, Col, Carousel, Media} from 'react-bootstrap'
import Popup from "reactjs-popup";
import Booking from "./components/Booking";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      triggerBooking: false
    };
  }

  closeBooking() {
    console.log('Closed Popup');
    this.setState({triggerBooking: false});
  }

  render() {
    return  <div>
    <Container fluid>
      <Row noGutters id="topNav">
        <Col>
          <img 
            src={require('./assets/img/logo.jpg')}
            alt="Logo"
          />
        </Col>
        <Col className="entry activeTopNav">Home</Col>
        <Col className="entry">About</Col>
        <Col className="entry">Gallery</Col>
        <Col className="entry">Specialty</Col>
        <Col className="entry">Reviews</Col>
        <Col className="entry">Contact</Col>
        <Col md={3} className="entry bookingBtn" onClick={() => this.setState({triggerBooking: true})}>Book Online</Col>
      </Row>
    </Container>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Minerva Abbott</span>
          <h5>General and Cosmetic Dentistry</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Todd Montgomery</span>
          <h5>Physician</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Gene Hodges</span>
          <h5>Physician</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container fluid>
      <Row noGutters id="docSection">
        {
          [{
            name: 'Dr. Maud McDonald',
            spec: "General Physician",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor sapien in ipsum consequat mollis. Fusce sagittis, elit sed sollicitudin ..",
            eduDesc: 'University of Michigan <br /> School of Medical',
            img: require("./assets/img/maud.JPG")
          },
          {
            name: 'Dr. Matilda Figueroa',
            spec: "General Physician",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor sapien in ipsum consequat mollis. Fusce sagittis, elit sed sollicitudin ..",
            eduDesc: 'University of Michigan <br /> School of Medical',
            img: require("./assets/img/matilda.JPG")
          }
        ].map(doctorDetail => (
          <Col>
            <Media>
              <img
                className="align-self-start mr-3"
                src={doctorDetail.img}
                alt="Generic placeholder"
              />
              <Media.Body id="doctorDesc">
                <div className="name">{doctorDetail.name}</div>
                <div className="spec">{doctorDetail.spec}</div>
                <div className="desc">{doctorDetail.desc}</div>
                <div className="edu">Education</div>
                <div className="eduDesc">{doctorDetail.eduDesc}</div>
              </Media.Body>
            </Media>
            <div className="docMoreDetails">
              <div className="detailsRow">
                <img
                  src={require('./assets/img/star.JPG')}
                  alt="Membership"
                />
                <div className="detailsDesc">
                  <span className="lang">Membership</span>
                  <div  className="langDetails">Lorem ipsum dolor sit amet
                  Consectetur adipiscing elit
                  Maecenas tempor sapien</div>
                </div>
              </div>
              <div className="detailsRow">
                <img
                  src={require('./assets/img/chat.JPG')}
                  alt="Membership"
                />
                <div className="detailsDesc">
                  <span className="lang">Languages</span>
                  <div className="langDetails">English<br />French</div>
                </div>
              </div>
            </div>
          </Col>
        ))
        }
      </Row>
    </Container>
    <Popup
      open={this.state.triggerBooking}
      modal
      closeOnDocumentClick={false}
      closeOnEscape={false}
      lockScroll
      onClose={this.closeBooking.bind(this)}
      overlayStyle={{backgroundColor: 'rgb(22,35,42)'}}
    >
      <a className="close" onClick={this.closeBooking.bind(this)}>
        &times;
      </a>
      <Booking>
      </Booking>
    </Popup>
  </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);