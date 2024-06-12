
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    const [logo, setLogo] = useState();
    const [description, setDescription] = useState();
    const [user, setUserData] = useState({ Data: [] });
    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: window.localStorage.getItem("email")
        })
            .then((response) => {
                setUserData(response.data.Data);
                console.log(response.data.Data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });

        axios.post("https://backend-testing-1rgv.onrender.com/company_dashboard_data", {
            email: window.localStorage.getItem("email")
        }).then((obj) => {
            console.log(obj);
            if (obj.data.data === true) {
                console.log(obj.data.details.logo);
                setLogo(obj.data.details.logo);
                setImages(obj.data.details.company_images);
                setDescription(obj.data.details.description);
            }
        });
    }, []);

    const mid = Math.ceil(images.length / 2);
    const leftColumn = images.slice(0, mid);
    const rightColumn = images.slice(mid);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#007bff", height: "200px" }}>
                                    <div className="ms-4 mt-5 d-flex flex-column">
                                        <img src={logo}  onClick={() => openModal(logo)}
                                            alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: "150px", zIndex: "1" }} />
                                    </div>
                                    <div className="ms-3" style={{ marginTop: "130px" }}>
                                        <h5>{user.Company_name}</h5>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">Description</p>
                                        <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                            <p className="font-italic mb-1">{description}</p>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                            <p className="lead fw-normal mb-1">Address-{user.Address}</p>
                                            <p className="lead fw-normal mb-1">Mobile-{user.Mobile_no}</p>
                                            <p className="lead fw-normal mb-1">Email-{user.Email}</p>
                                            <p className="lead fw-normal mb-1">Certificate-<img src={user.Certificate} className="w-100 rounded-3"  onClick={() => openModal(user.Certificate)}/></p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Recent photos</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            {leftColumn.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`Image ${index}`}
                                                    className="w-full rounded-3xl object-cover cursor-pointer"
                                                    style={{ height: "200px" }}
                                                    onClick={() => openModal(image)}
                                                />
                                            ))}
                                        </div>
                                        <div className="space-y-4">
                                            {rightColumn.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`Image ${index}`}
                                                    className="w-full rounded-3xl object-cover cursor-pointer"
                                                    style={{ height: "200px" }}
                                                    onClick={() => openModal(image)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
                        <div className="relative">
                            <img src={selectedImage} alt="Zoomed" className="rounded-3xl object-cover" style={{ maxHeight: "80vh", maxWidth: "80vw" }} />
                            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
