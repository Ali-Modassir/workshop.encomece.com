import React, { useEffect, useState } from "react";

//Images
import previewImg from "../assets/img/6461-removebg-preview.png";
import image11 from "../assets/img/Image 11.png";
import image12 from "../assets/img/Image 12.png";
import BrandLogo from "../assets/img/logo.png";
import image14 from "../assets/img/Image 14.png";
import image5 from "../assets/img/Image 5.png";
import Carousel from "react-bootstrap/Carousel";
import EventCard from "./Components/EventCard";

const WorkshopHome = () => {
  //Carousel icons
  const nextIcon = (
    <span class="fa fa-chevron-circle-right" aria-hidden="true"></span>
  );
  const prevIcon = (
    <span class="fa fa-chevron-circle-left" aria-hidden="true"></span>
  );

  const [allEvent] = useState([
    <EventCard event="Workshop1" />,
    <EventCard event="Webinar" />,
    <EventCard event="Workshop2" />,
  ]);
  const [webinar] = useState([
    <EventCard event="Workshop1" />,
    <EventCard event="Workshop2" />,
  ]);
  const [workshop] = useState([<EventCard event="Webinar" />]);
  const [eventType, setEventType] = useState(allEvent);
  const [allActive, setAllActive] = useState("activeEvent");
  const [webinarActive, setWebinarActive] = useState(null);
  const [workshopActive, setWorkshopActive] = useState(null);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, [window.innerWidth]);

  const setEventHandle = (type) => {
    if (type == "all") {
      setEventType(allEvent);
      setAllActive("activeEvent");
      setWebinarActive(null);
      setWorkshopActive(null);
    }
    if (type == "webinar") {
      setEventType(webinar);
      setAllActive(null);
      setWebinarActive("activeEvent");
      setWorkshopActive(null);
    }
    if (type == "workshop") {
      setEventType(workshop);
      setAllActive(null);
      setWebinarActive(null);
      setWorkshopActive("activeEvent");
    }
  };

  return (
    <>
      <header className="header">
        <div className="head">
          <div className="container">
            <div className="row">
              <div className={screenWidth >= 773 ? "col-md-6 col-12 pt-5" : ""}>
                <h1 className="pt-5 tagline-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h1>
                <p className="pb-5 description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda ex impedit enim atque aspernatur id suscipit sint
                  recusandae deleniti, totam iste nesciunt inventore iure
                  perspiciatis, saepe dolorem? Voluptatum, quisquam officiis.
                </p>
                <button id="but" type="button" className="btn-exp">
                  <a href="/register">Explore Now &#62;</a>
                </button>
              </div>
              <div className="header-img">
                <img src={previewImg} className="headImg" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="event-names">
        <div
          className={`all eventName ${allActive}`}
          onClick={() => {
            setEventHandle("all");
          }}
        >
          All Event
        </div>
        <div
          className={`webinar eventName ${webinarActive}`}
          onClick={() => setEventHandle("webinar")}
        >
          Webinar
        </div>
        <div
          className={`workshope eventName ${workshopActive}`}
          onClick={() => setEventHandle("workshop")}
        >
          Workshop
        </div>
      </div>

      {/* Event Cards */}
      <div className="eventCardContainer">
        <div className="eventCards">{eventType}</div>
      </div>

      <div className="container bg-event ">
        <div className="row pt-5">
          <div className="col-md-8 col-12">
            <div className="events">
              <div className="images">
                <div className="img2">
                  <img
                    src={image12}
                    className="img img-fluid"
                    id="one"
                    alt=""
                  />
                </div>
                <div className="img1">
                  <img
                    src={image11}
                    className="img img-fluid"
                    id="one"
                    alt=""
                  />
                </div>
                <div className="img3">
                  <img
                    src={image14}
                    className="img img-fluid"
                    id="three"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="info">
              <h1 className="info-title">Our Events</h1>
              <p className="info-descrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam officiis accusantium, repellat totam laboriosam placeat
                soluta quidem vitae rem quis tempore accusamus architecto
                voluptatem dicta commodi magni minus. At.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-trainers pt-5 pb-5">
        <div className="container pb-5">
          <h1 className="text-center trainers-title">Our Best Trainers</h1>
          <div className="row pt-5">
            <div className="col-md-6 col-12 pt-5">
              <div className="t1">
                <div className="t1head pl-3">
                  <img className="clip-circle" src={image5} alt="" />
                  <h4>Lorem Ispum</h4>
                  <p>Lorem Ispum</p>
                </div>
                <div className="t1body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  hic vero necessitatibus. Est fugit corporis reiciendis at
                  possimus nostrum officiis vel voluptates accusamus, obcaecati
                  ipsa magni cupiditate omnis necessitatibus accusantium!
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5">
              <div className="t2">
                <div className="t1head pl-3">
                  <img className="clip-circle" src={image5} alt="" />
                  <h4>Lorem Ispum</h4>
                  <p>Lorem Ispum</p>
                </div>
                <div className="t2body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  hic vero necessitatibus. Est fugit corporis reiciendis at
                  possimus nostrum officiis vel voluptates accusamus, obcaecati
                  ipsa magni cupiditate omnis necessitatibus accusantium!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="container pt-5 pb-5">
        <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
          <Carousel.Item>
            <div className="pt-3 bg-linear-2">
              <div className="row">
                <div className="col-md-6 mx-auto col-12 col-sm-9">
                  <div className="card-curve">
                    <div className="card-body">
                      <h3 className="text-center pl-md-5 pt-md-5 pt-sm-2">
                        partner-1
                      </h3>
                      <div className="parter-profile pl-3">
                        <div className="media pt-sm-4 pl-sm-1">
                          <img className="clip-circle" src={image5} alt="" />
                          <div className="media-body">
                            <h5 className="pt-3 pl-3">Anne Louis</h5>
                            <p className=" pl-3">Lorem ipsum</p>
                          </div>
                        </div>
                        <p className="pl-3 pr-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corporis veniam eveniet quas recusandae delectus
                          aut. Nihil tempore beatae exercitationem ipsa
                          assumenda velit adipisci, aspernatur totam ut vero.
                          Soluta, facere ad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="pt-3 bg-linear-2">
              <div className="row">
                <div className="col-md-6 mx-auto col-12 col-sm-9">
                  <div className="card-curve">
                    <div className="card-body">
                      <h3 className="text-center pl-md-5 pt-md-5 pt-sm-2">
                        partner-2
                      </h3>
                      <div className="parter-profile pl-3">
                        <div className="media  pt-sm-4 pl-sm-1">
                          <img className="clip-circle" src={image5} alt="" />
                          <div className="media-body">
                            <h5 className="pt-3 pl-3">Anne Louis</h5>
                            <p className=" pl-3">Lorem ipsum</p>
                          </div>
                        </div>
                        <p className="pl-3 pr-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corporis veniam eveniet quas recusandae delectus
                          aut. Nihil tempore beatae exercitationem ipsa
                          assumenda velit adipisci, aspernatur totam ut vero.
                          Soluta, facere ad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="pt-3 bg-linear-2">
              <div className="row">
                <div className="col-md-6 mx-auto col-12 col-sm-9">
                  <div className="card-curve">
                    <div className="card-body">
                      <h3 className="text-center pl-md-5 pt-md-5 pt-sm-2">
                        partner-3
                      </h3>
                      <div className="parter-profile pl-3">
                        <div className="media  pt-sm-4 pl-sm-1">
                          <img className="clip-circle" src={image5} alt="" />
                          <div className="media-body">
                            <h5 className="pt-3 pl-3">Anne Louis</h5>
                            <p className=" pl-3">Lorem ipsum</p>
                          </div>
                        </div>
                        <p className="pl-3 pr-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corporis veniam eveniet quas recusandae delectus
                          aut. Nihil tempore beatae exercitationem ipsa
                          assumenda velit adipisci, aspernatur totam ut vero.
                          Soluta, facere ad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default WorkshopHome;
