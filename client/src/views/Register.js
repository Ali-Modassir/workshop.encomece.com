import React, { useState } from "react";

const Register = () => {
  //Form Submit
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //Form Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(process.env.REACT_APP_BASE_URL + "/register", {
      method: "POST",
      body: new URLSearchParams(new FormData(event.target)),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setSuccess(data.message);
        } else {
          console.log(data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="main mt-5 mb-5">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-9 mx-auto">
            <div className="card">
              <h2 className="text-center pt-3 pb-3">Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group pt-2">
                  <input
                    type="text"
                    className="form-control col-md-9 col-10 mx-auto name"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group pt-2">
                  <input
                    type="email"
                    className="form-control col-md-9 col-10 mx-auto email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group pt-2">
                  <input
                    type="number"
                    className="form-control col-md-9 col-10 mx-auto phone"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group pt-2">
                  <input
                    type="text"
                    className="form-control col-md-9 col-10 mx-auto study"
                    id="study"
                    name="study"
                    placeholder="College/University"
                  />
                </div>
                <div className="form-group pt-2">
                  <select className="form-control col-md-9 col-10 mx-auto">
                    <option>Subject</option>
                    <option>Digital marketing workshop</option>
                    <option>Cybersecurity workshops</option>
                    <option>Devops workshop</option>
                    <option>WordPress Workshop</option>
                  </select>
                </div>
                <div className="col-md-9 col-10 mx-auto pt-2 pb-4">
                  {isLoading && (
                    <div className="d-flex justify-content-center mb-3">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  {!!success && (
                    <div className="alert alert-success" role="alert">
                      <h4 className="alert-heading">Registered!</h4>
                      <p>{success}</p>
                    </div>
                  )}
                  <button type="submit" className="btn col-12 bg-linear">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
