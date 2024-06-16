import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Lottie/Loading";

export default function Company_view(props) {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  var [data, setData] = useState();
  var [images, setImages] = useState([]);
  var [date, setDate] = useState();
  var [time, setTime] = useState();
  var [status, setStatus] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const iconstyle = {
    fontSize: "24px",
    marginTop: "8px",
  };

  const emailfield = {
    marginLeft: "19px",
  };

  function dateEnter(e) {
    setDate(e.target.value);
  }

  function timeEnter(e) {
    setTime(e.target.value);
  }

  useEffect(() => {
    axios
      .post("https://backend-testing-1rgv.onrender.com/company_dashboard_data", {
        email: props.email,
      })
      .then((obj) => {
        console.log(obj);
        if (obj.data.data === true) {
          setData(obj.data.details);
          setImages(obj.data.details.company_images);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("https://backend-testing-1rgv.onrender.com/visit_request_data", {
        c_email: props.email,
        j_email: window.localStorage.getItem("email"),
        Approve: "false",
      })
      .then((data) => {
        console.log(data.data.data);
        if (data.data.data === "success") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Approve() {
    setLoading(true);
  
    console.log(props.email);
    axios
      .put("https://backend-testing-1rgv.onrender.com/approve", {
        Email: props.email,
      })
      .then((data) => {
        alert("Company Approve Successfully");
        window.location.reload();
        setLoading(false);
        setLoading2(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
        setLoading2(false);
      });
  }

  function Reject() {
    setLoading1(true);
    axios
      .delete("https://backend-testing-1rgv.onrender.com/remove", {
        data: {
          Email: props.email,
        },
      })
      .then((data) => {
        alert("Company Remove Successfully");
        window.location.reload();
        setLoading1(false);
      })
      .catch((error) => {
        alert(error);
        setLoading1(false);
      });
  }

  function ApplyforVisitRequest(event) {
    event.preventDefault();
    setLoading2(true);
    axios
      .post("https://backend-testing-1rgv.onrender.com/visit_request", {
        cemail: props.email,
        jemail: window.localStorage.getItem("email"),
        Approve: "false",
        Date: date,
        Time: time,
      })
      .then((data) => {
        console.log(data);
        setLoading2(false);
        if (data.data.data === "success") {
          setStatus(true);
          alert("Visit Request Successfully Send. Please wait for company response.");
        }
      })
      .catch((error) => {
        setLoading2(false);
        console.log(error);
      });
  }

  const mid = Math.ceil(images.length / 2);
  const leftColumn = images.slice(0, mid);
  const rightColumn = images.slice(mid);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`card ${isModalOpen ? 'blur-sm' : ''}`}>
        <div className="flex justify-center " >
          {props.show !== "true" ? (
            <img
              src={props.img}
              className="w-72 max-w-full h-auto cursor-pointer"
              alt="..."
              onClick={() => openModal(props.img)}
            />
          ) : null}
        </div>
        <div className="card-body">
          <h5 className="card-title sm:ml-0 md:ml-0 lg:ml-0 ml-0 p-0">
            <i className="fa fa-building-o" aria-hidden="true"></i> Company Name:-{props.name}
          </h5>
          <ul className="list-group list-group-flush">
            <li className={`p-0 list-group-item ${props.address.length > 20 ? 'w-full' : 'w-auto'}`} >
              <i className="fa fa-address-card mr-0" aria-hidden="true"></i> <b>Address : </b>{props.address}
            </li>

            <li className="list-group-item p-0">
              <i className="fa fa-mobile" aria-hidden="true" style={{ fontSize: "20px", width: "" }}></i><b> Mobile No. : </b>{props.mobile}
            </li>
            <li className="list-group-item p-0">
              <i className="fa fa-envelope" aria-hidden="true"></i><b> Email : </b>{props.email}
            </li>
            {props.status === "unverified" ? (
              <li className="card text-center" style={{ alignItems: "center", margin: "20px", border: "none" }}>
                <div>
                  <button className="centered-button1 mt-3" style={{ background: "green" }} onClick={Approve}>
                    {loading ? 'Loading...' : 'Approve'}
                  </button>
                  <button className="centered-button1" style={{ background: "red" }} onClick={Reject}>
                    {loading1 ? 'Loading...' : 'Reject'}
                  </button>
                </div>
              </li>
            ) : console.log()}
          </ul>
          {props.show === "true" ? (
            <div className="mb-5 ">
              <p className="lead fw-normal mb-1 p-4">About Company</p>
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                {data ? (
                  <>
                    <p className="font-italic mb-1">
                      <i className="fa fa-asterisk" aria-hidden="true"></i>
                      {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row">
  <p className="font-italic mb-1 flex items-center">
    <i className="fa fa-clock-o" aria-hidden="true"></i>
    <span className="ml-2">Opening Time: {data.opening_time}</span>
  </p><div className="w-5"></div>
  <p className="flex items-center sm:ml-4 mt-2 sm:mt-0">
    <i className="fa fa-clock-o" aria-hidden="true"></i>
    <span className="ml-2">Closing Time: {data.closing_time}</span>
  </p>
</div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p className="lead fw-normal mb-0" style={{ marginTop: "10px" }}>Photos</p>
                    </div>
                    <div className="row g-2">
                      <div className="col mb-2">
                        {leftColumn.map((image, index) => (
                          <img key={index} src={image} alt={`Image ${index}`}   onClick={() => openModal(image)} className="w-full rounded-3xl object-cover cursor-pointer"
                            style={{ height: "200px" }} />
                        ))}
                      </div>
                      <div className="col mb-2">
                        {rightColumn.map((image, index) => (
                          <img key={index} src={image} alt={`Image ${index}`} onClick={() => openModal(image)} className="w-full rounded-3xl object-cover cursor-pointer"
                            style={{ height: "200px" }} />
                        ))}
                      </div>
                    </div>
                    <form onSubmit={ApplyforVisitRequest}>
                      {status === true ? null : (
                        <>
                          {/* <li className="list-group-item" style={{ margin: "10px" }}>
                            <div className="input-div2" style={{ marginLeft: "10px" }}>
                              <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
                              <h5 style={{ marginTop: "10px" }}>Visit Date</h5>
                              <div className="input-bx" style={emailfield}>
                                <input type="date" required="required" onChange={dateEnter} value={date} />
                              </div>
                            </div>
                          </li> */}
                          <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
                            <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
                            <h5 style={{ marginTop: "5px" }}>Visit Date</h5>
                            <div className="input-bx" style={emailfield}>
                              <input type="date" required="required" onChange={dateEnter} value={date} />
                            </div>
                          </div></li>
                          {/* <li className="list-group-item" style={{ margin: "10px" }}>
                            <div className="input-div2" style={{ marginLeft: "10px" }}>
                              <i className="fa fa-clock-o" aria-hidden="true" style={iconstyle}></i>
                              <h5 style={{ marginTop: "10px" }}>Visit Time</h5>
                              <div className="input-bx" style={emailfield}>
                                <input type="time" required="required" onChange={timeEnter} value={time} />
                              </div>
                            </div>
                          </li> */}
                          <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
                            <i className="fa fa-clock-o" aria-hidden="true" style={iconstyle}></i>
                            <h5 style={{ marginTop: "5px" }}>Visit time</h5>
                            <div className="input-bx" style={emailfield}>
                              <input type="time" required="required" onChange={timeEnter} value={time} />
                            </div>
                          </div></li>
                        </>
                      )}
                      {props.show === "true" ? (
                        status === true ? (
                          <button className="centered-button" type="submit" style={{ marginTop: "10px" }} disabled>
                            Applied
                          </button>
                        ) : (
                          <button 
                          className="centered-button" 
                          type="submit" 
                          style={{ marginTop: "10px" }} 
                          disabled={loading} // Disable the button while loading
                        >
                          {loading2 ? (
                            'Loading...' // Replace with a spinner or loading indicator
                          ) : (
                            'Apply'
                          )}
                        </button>
                        )
                      ) : null}
                    </form>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-auto max-h-screen"
              alt="Zoomed Image"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
