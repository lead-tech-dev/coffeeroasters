import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <section>
        <div className="banner-area">
          <div className="container">
            <div className="row">
              <div className="banner-area__info">
                <h2> About Us</h2>
                <p>
                  Coffeeroasters began its journey of exotic discovery in 1999,
                  highlighting stories of coffee from around the world. We have
                  since been dedicated to bring the perfect cup - from bean to
                  brew - in every shipment.
                </p>
              </div>
              <div className="banner-area__img">
                <div className="img-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="commitment-area">
          <div className="container">
            <div className="row">
              <div className="commitment-area__img">
                <div className="img-content"></div>
              </div>
              <div className="commitment-area__info">
                <h2>Our commitment</h2>
                <p>
                  {" "}
                  We’re built on a simple mission and a commitment to doing good
                  along the way. We want to make it easy for you to discover and
                  brew the world’s best coffee at home. It all starts at the
                  source. To locate the specific lots we want to purchase, we
                  travel nearly 60 days a year trying to understand the
                  challenges and opportunities in each of these places. We
                  collaborate with exceptional coffee growers and empower a
                  global community of farmers through with well above fair-trade
                  benchmarks. We also offer training, support farm community
                  initiatives, and invest in coffee plant science. Curating only
                  the finest blends, we roast each lot to highlight tasting
                  profiles distinctive to their native growing region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="uncompromising-area">
          <div className="container">
            <div className="row">
              <div className="uncompromising-area__info">
                <h2>Uncompromising quality</h2>
                <p>
                  {" "}
                  Although we work with growers who pay close attention to all
                  stages of harvest and processing, we employ, on our end, a
                  rigorous quality control program to avoid over-roasting or
                  baking the coffee dry. Every bag of coffee is tagged with a
                  roast date and batch number. Our goal is to roast consistent,
                  user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
              </div>
              <div className="uncompromising-area__img">
                <div className="img-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="headquarters-area">
          <div className="container">
            <div className="row">
              <div className="headquarters-area__title">
                <h4>Our headquarters</h4>
              </div>
              <div className="headquarters-area__list-items">
                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/about/desktop/illustration-uk.svg"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <h3>United Kingdom</h3>
                    <div className="location">
                      <span> 68 Asfordby Rd</span>
                      <span>Alcaston</span>
                      <span>SY6 1YA</span>
                      <span>+44 1241 918425</span>
                    </div>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/about/desktop/illustration-canada.svg"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <h3>Canada</h3>
                    <div className="location">
                      <span> 1528 Eglinton Avenue</span>
                      <span>Toronto</span>
                      <span>Ontario M4P 1A6</span>
                      <span>+1 416 485 2997</span>
                    </div>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/about/desktop/illustration-australia.svg"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <h3>Australia</h3>
                    <div className="location">
                      <span> 36 Swanston Street</span>
                      <span>Kewell</span>
                      <span>Victoria</span>
                      <span>+61 4 9928 3629</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
