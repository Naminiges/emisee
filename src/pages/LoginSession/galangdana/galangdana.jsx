import React from "react";
import "./galangdana.css";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";

export const Galangdana = () => {
  return (
    <div>
      <Navbarlogin />
      <div className="container">
        <div className="top">
          <div>
            <h1>Mari bantu lebih banyak orang</h1>
          </div>
        </div>
        <div className="galangdana-container">
          <div className="galangdana-item">
            <div className="galangdana-label">Fullname</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">ID Number</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Gender</div>
            <div className="galangdana-gender">
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Place and Date of Birth</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
            <input type="date" className="galangdana-input" />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Province</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Districts</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Profession</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Citizenship</div>
            <div className="galangdana-citizenship">
              <input type="radio" id="wni" name="citizenship" value="wni" />
              <label htmlFor="wni">WNI</label>
              <input type="radio" id="wna" name="citizenship" value="wna" />
              <label htmlFor="wna">WNA</label>
            </div>
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Phone Number</div>
            <input
              type="tel"
              className="galangdana-input"
              placeholder="Write Here"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Email</div>
            <input
              type="email"
              className="galangdana-input"
              placeholder="Your Email"
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Address</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write here"
            />
          </div>
          <div className="galangdana-counter">0 / 1000</div>
          <div className="galangdana-buttons">
            <div className="galangdana-back">Back</div>
            <div className="galangdana-next">Next</div>
          </div>
          <div className="galangdana-save">Exit and Save Changes</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
