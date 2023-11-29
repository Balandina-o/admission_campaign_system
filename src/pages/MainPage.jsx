import React from "react";

const MainPage = () => {
  return (
    <div id="main-content">
      <div id="templatemo">
        <div class="main-slider">
          <div class="flexslider">
            <ul class="slides">
              <li>
                <div class="slider-caption">
                  <h2>Responsive Layout</h2>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames.
                  </p>
                  <a href="#" class="largeButton homeBgColor">
                    Read More
                  </a>
                </div>
                <img src="images/slide1.jpg" alt="Slide 1" />
              </li>

              <li>
                <div class="slider-caption">
                  <h2>Portfolio Website</h2>
                  <p>
                    Fusce convallis enim vitae sagittis mollis. Sed bibendum
                    ultricies dignissim.
                  </p>
                  <a href="#" class="largeButton homeBgColor">
                    Details
                  </a>
                </div>
                <img src="images/slide2.jpg" alt="Slide 2" />
              </li>

              <li>
                <div class="slider-caption">
                  <h2>Free Templates</h2>
                  <p>
                    All templates are free to download and use for your personal
                    or commercial websites.
                  </p>
                  <a href="#" class="largeButton homeBgColor">
                    Downloads
                  </a>
                </div>
                <img src="images/slide3.jpg" alt="Slide 3" />
              </li>
            </ul>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="welcome-text">
                <h2>Welcome to Sonic Template</h2>
                <p>
                  Sonic is free HTML5 template provided by{" "}
                  <a href="http://www.facebook.com/templatemo" target="_parent">
                    templatemo
                  </a>{" "}
                  website for everyone. Credit goes to{" "}
                  <a rel="nofollow" href="http://flexslider.woothemes.com">
                    FlexSlider
                  </a>
                  . Maecenas adipiscing pellentesque elit eu volutpat. Integer
                  vitae <a href="#">pulvinar magna</a>. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Praesent auctor mi metus,
                  nec sagittis purus ultrices id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
