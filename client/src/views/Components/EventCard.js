import React from "react";

//Image
import BrandLogo from "../../assets/img/logo.png";

const EventCard = ({ event }) => {
  return (
    <div className="eventCard">
      {/* <div className="eventCard">
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
              <h5>{event}</h5>
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
      </div> */}
      <div className="img-spot">
        <div className="reg">
          <img src={BrandLogo} alt="" />
        </div>
      </div>
      <div className="eventTagline">
        <h5>{event}</h5>
      </div>
      <div className="eventDetails">
        <div className="details-1">
          <span className="starton"> start on: </span>
          <h6 className="time">
            10:00 AM,19 Dec <br />
            2020
          </h6>
        </div>
        <div className="details-2">
          <span className="starton">Entry Fee:</span>
          <h6 className="fee">free</h6>
        </div>
        <div className="details-3">
          <span className="starton">Venue:</span>
          <h6 className="venue">
            Online,
            <br />
            Codezone
          </h6>
        </div>
      </div>
      <div className="eventCardFooter">
        <h5>Lorem ipsum dolor sit amet consectetur</h5>
        <span className="badge badge-secondary mr-1 ml-1">Cyber security</span>
        <span className="badge badge-secondary mr-1 ml-1">programing</span>
      </div>
      <div className="register bg-linear">
        <a href="/register" className="btn">
          Register
        </a>
      </div>
    </div>
  );
};

export default EventCard;
