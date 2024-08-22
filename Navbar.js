import React from "react";
import "./navbar.css";
import HeroSection from "./HeroSection";
import Delevery from "./Delevery";
import Collection from "../Collection";
import BeautifySpace from "../BeautifySpace";
import LivingRange from "../LivingRange";
import Working from "../Working";
import Email from "../Email";
import Footer from "../Footer"
function NavBar() {
  return (
    <div>
      <div class="nav ">
        <img
          src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685955562/SkinClinic_tebd30.png"
          alt="logo"
          className="logo"
        />

        <div>
          <div class="nav-link">
            <a class="nav-item " href="/">
              Home
            </a>
            <a class="nav-item" href="/">
              Services
            </a>
            <a class="nav-item" href="/">
              Doctors
            </a>
            <a class="nav-item " href="/">
              Products
            </a>
            <a class="nav-item " href="/">
              Gallery
            </a>
          </div>
        </div>
      </div>
      <HeroSection/>
      <Delevery/>
      <Collection/>
      <BeautifySpace/>
      <LivingRange/>
      <Working/><Email/>
      <Footer/>
    </div>

  );
}

export default NavBar;
