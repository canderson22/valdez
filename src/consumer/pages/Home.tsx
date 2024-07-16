import React from "react";
import { Testimonials } from "../components/Testimonals";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="embed-responsive">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/NV19XDWPkvQ"
            title="Jimmy Valdez Born and Raised In L.A Official Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="container main-content">
        <div className="row">
          <div className="col bg-light nav-section sidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Musical Bookings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Personal Corridos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Motivational Speaking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9">some bio</div>
        </div>
      </div>
      <div className="container">
        <Testimonials />
      </div>
    </div>
  );
};

export { Home };
