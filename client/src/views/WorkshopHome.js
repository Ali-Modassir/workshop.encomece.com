import React, { useEffect } from "react";

//Images
import previewImg from "../assets/img/6461-removebg-preview.png";
import image11 from "../assets/img/Image 11.png";
import image12 from "../assets/img/Image 12.png";
import BrandLogo from "../assets/img/logo.png";
import image14 from "../assets/img/Image 14.png";
import image5 from "../assets/img/Image 5.png";
import Carousel from "react-bootstrap/Carousel";

const WorkshopHome = () => {
  //Carousel icons
  const nextIcon = (
    <span class="fa fa-chevron-circle-right" aria-hidden="true"></span>
  );
  const prevIcon = (
    <span class="fa fa-chevron-circle-left" aria-hidden="true"></span>
  );

  useEffect(() => {
    const all = document.querySelector(".all");
    const webinar = document.querySelector(".webinar");
    const workshope = document.querySelector(".workshope");
    const codding = document.querySelector(".codding");

    const webinar_event = document.querySelector(".webinar-event");
    const workshop_event = document.querySelector(".workshope-event");
    const codding_event = document.querySelector(".codding-event");

    all.addEventListener("click", function () {
      workshop_event.classList.remove("hide");
      codding_event.classList.remove("hide");
      webinar_event.classList.remove("hide");
    });

    webinar.addEventListener("click", function () {
      workshop_event.classList.add("hide");
      codding_event.classList.add("hide");
      webinar_event.classList.remove("hide");
    });
    workshope.addEventListener("click", function () {
      webinar_event.classList.add("hide");
      codding_event.classList.add("hide");
      workshop_event.classList.remove("hide");
    });
    codding.addEventListener("click", function () {
      webinar_event.classList.add("hide");
      workshop_event.classList.add("hide");
      codding_event.classList.remove("hide");
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="head">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 pt-5">
                <h2 className="h1 pt-5 tagline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h2>
                <p className="pb-5 description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda ex impedit enim atque aspernatur id suscipit sint
                  recusandae deleniti, totam iste nesciunt inventore iure
                  perspiciatis, saepe dolorem? Voluptatum, quisquam officiis.
                </p>
                <button id="but" type="button" className="btn-exp">
                  Explore Now &#62;
                </button>
              </div>
              <div className="col-md-6 col-12 pt-5">
                <img
                  src={previewImg}
                  className="img img-fluid pb-5"
                  width="550"
                  height="338"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid pt-4 pb-4">
        <div className="row heading pt-2 pb-2">
          <div className="col-3 text-center all">
            <span className="txt">All Event</span>
          </div>
          <div className="col-3 text-center webinar">
            <span className=" txt">Webinar</span>
          </div>
          <div className="col-3 text-center workshope">
            <span className="txt">Workshop</span>
          </div>
          <div className="col-3 text-center codding">
            <span className="txt">Coding Event</span>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row pt-5">
          <div className="col-12 col-lg-4 pt-3 all-event webinar-event show">
            <div className="card">
              <div className="row">
                <div className="col-12">
                  <div className="img-spot">
                    <div className="reg">
                      <img src={BrandLogo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3 pl-4">
                  <h5>Cyber Security Webinar</h5>
                </div>
                <div className="col-12">
                  <div className="row details pl-3">
                    <div className="col-5">
                      <span className="starton"> start on: </span>
                      <h6 className="time">
                        10:00 AM,19 Dec <br />
                        2020
                      </h6>
                    </div>
                    <div className="col-3">
                      <span className="starton">Entry Fee:</span>
                      <h6 className="fee">free</h6>
                    </div>
                    <div className="col-4">
                      <span className="starton">Venue:</span>
                      <h6 className="venue">
                        Online,
                        <br />
                        Codezone
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pl-4 pt-4">
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <span className="badge badge-secondary mr-1 ml-1">
                      Cyber security
                    </span>
                    <span className="badge badge-secondary mr-1 ml-1">
                      programing
                    </span>
                  </div>
                </div>
                <div className="col-12 pt-3 pb-3">
                  <div className="register bg-linear">
                    <a href="/register" className="btn">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4  pt-3 all-event workshope-event show">
            <div className="card">
              <div className="row">
                <div className="col-12">
                  <div className="img-spot">
                    <div className="reg">
                      <img src={BrandLogo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3 pl-4">
                  <h5>Cyber Security Workshope</h5>
                </div>
                <div className="col-12">
                  <div className="row details pl-3">
                    <div className="col-5">
                      <span className="starton">start on:</span>
                      <h6 className="time">
                        10:00 AM,19 Dec <br />
                        2020
                      </h6>
                    </div>
                    <div className="col-3">
                      <span className="starton">Entry Fee:</span>
                      <h6 className="fee">free</h6>
                    </div>
                    <div className="col-4">
                      <span className="starton">Venue:</span>
                      <h6 className="venue">
                        Online,
                        <br />
                        Codezone
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pl-4 pt-4">
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <span className="badge badge-secondary mr-1 ml-1">
                      Cyber security
                    </span>
                    <span className="badge badge-secondary mr-1 ml-1">
                      programing
                    </span>
                  </div>
                </div>
                <div className="col-12 pt-3 pb-3">
                  <div className="register bg-linear">
                    <a href="/register" className="btn">
                      Register
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 pt-3 all-event codding-event show">
            <div className="card">
              <div className="row">
                <div className="col-12">
                  <div className="img-spot">
                    <div className="reg">
                      <img src={BrandLogo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3 pl-4">
                  <h5>Cyber Security Codding</h5>
                </div>
                <div className="col-12">
                  <div className="row details pl-3">
                    <div className="col-5">
                      <span className="starton">start on:</span>
                      <h6 className="time">
                        10:00 AM,19 Dec <br />
                        2020
                      </h6>
                    </div>
                    <div className="col-3">
                      <span className="starton">Entry Fee:</span>
                      <h6 className="fee">free</h6>
                    </div>
                    <div className="col-4">
                      <span className="starton">Venue:</span>
                      <h6 className="venue">
                        Online,
                        <br />
                        Codezone
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pl-4 pt-4">
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <span className="badge badge-secondary mr-1 ml-1">
                      Cyber security
                    </span>
                    <span className="badge badge-secondary mr-1 ml-1">
                      programing
                    </span>
                  </div>
                </div>
                <div className="col-12 pt-3 pb-3">
                  <div className="register bg-linear">
                    <a href="/register" className="btn">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <h1>Our Events</h1>
              <p>
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
          <h1 className="text-center">Our Best Trainers</h1>
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
