import React from "react";
import { useState } from "react";
export default function NewsComponent(props)
{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return(<><div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start" style={{ margin: "20px" }}>
      <img src={props.data.urlToImage} className="w-72 max-w-full h-auto cursor-pointer lg:mr-3 mb-3 lg:mb-0" onClick={handleImageClick} alt="News Image" />
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.data.description}</p>
        <p style={{ fontFamily: "Poppins" }}><b>Publish At:</b> {props.data.publishedAt}</p>
        <p style={{ fontFamily: "Poppins" }}>{props.data.content}</p>
        <a href={props.data.url} className="btn btn-primary mt-2 lg:mt-0">Go somewhere</a>
      </div>
    </div>
    {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={props.data.urlToImage}
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