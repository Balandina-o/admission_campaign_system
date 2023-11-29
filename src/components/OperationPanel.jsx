import React from "react";

const OperationPanel = () => {
  return (
    <div>
      <div class="responsive-navigation visible-sm visible-xs">
        <a href="#" class="menu-toggle-btn">
          <i class="fa fa-bars fa-2x"></i>
        </a>
        <div class="navigation responsive-menu">
          <ul>
            <li class="home">
              <a href="#templatemo">Home</a>
            </li>
            <li class="about">
              <a href="#about">About Us</a>
            </li>
            <li class="services">
              <a href="#services">Services</a>
            </li>
            <li class="portfolio">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li class="contact">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="main-sidebar" class="hidden-xs hidden-sm">
        <div class="logo">
          <a href="#">
            <h1>Sonic</h1>
          </a>
          <span>Creative Portfolio Template</span>
        </div>

        <div class="navigation">
          <ul class="main-menu">
            <li class="home">
              <a href="#templatemo">Home</a>
            </li>
            <li class="about">
              <a href="#about">About Us</a>
            </li>
            <li class="services">
              <a href="#services">Services</a>
            </li>
            <li class="portfolio">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li class="contact">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OperationPanel;
