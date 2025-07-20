import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  function client() {
    navigate("/register/client");
  }

  function organizer() {
    navigate("/register/organizer");
  }

  return (
    <section className="hero-section">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active organizer position-relative">
            <img
              src="/hero images/1.png"
              className="d-block w-100 carousel-img"
              alt="Create Events"
            />
            <button className="carousel-btn-organizer" onClick={organizer}>
              Start as an Organizer
            </button>
          </div>

          <div className="carousel-item client position-relative">
            <img
              src="/hero images/2.png"
              className="d-block w-100 carousel-img"
              alt="Book Events"
            />
            <button className="carousel-btn-client" onClick={client}>
              Start as a Client
            </button>
          </div>

          <div className="carousel-item">
            <img
              src="/hero images/3.png"
              className="d-block w-100 carousel-img"
              alt="Manage Dashboard"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <span className="fs-4 fw-bold">EventFlow</span>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </header>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
