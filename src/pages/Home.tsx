import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section>
        <div className="hero-area">
          <div className="container">
            <div className="row">
              <div className="hero-area__info">
                <h1> Great coffee made simple.</h1>
                <p>
                  {" "}
                  Start your mornings with the world’s best coffees. Try our
                  expertly curated artisan coffees from our best roasters
                  delivered directly to your door, at your schedule.
                </p>
                <a href="#0" className="btn-main">
                  Create your plan
                </a>
              </div>

              <div className="hero-area__img">
                <div className="img-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="collection-area">
          <div className="container">
            <div className="row flex-direction-column">
              <div className="collection-area__title">
                <h1>our collection</h1>
              </div>
              <div className="collection-area__list-items">
                <div className="list-item">
                  <div className="img-box">
                    <img
                      src="/assets/home/desktop/image-gran-espresso.png"
                      alt="gran-espresso"
                    />
                  </div>
                  <div className="text-box">
                    <h4>Gran Espresso</h4>
                    <p>
                      Light and flavorful blend with cocoa and black pepper for
                      an intense experience.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="img-box">
                    <img
                      src="/assets/home/desktop/image-planalto.png"
                      alt="gran-espresso"
                    />
                  </div>
                  <div className="text-box">
                    <h4>Planalto</h4>
                    <p>
                      Brazilian dark roast with rich and velvety body, and hints
                      of fruits and nuts.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="img-box">
                    <img
                      src="/assets/home/desktop/image-piccollo.png"
                      alt="gran-espresso"
                    />
                  </div>
                  <div className="text-box">
                    <h4>Piccollo</h4>
                    <p>
                      Mild and smooth blend featuring notes of toasted almond
                      and dried cherry.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="img-box">
                    <img
                      src="/assets/home/desktop/image-danche.png"
                      alt="gran-espresso"
                    />
                  </div>
                  <div className="text-box">
                    <h4>Danche</h4>
                    <p>
                      Ethiopian hand-harvested blend densely packed with vibrant
                      fruit notes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="why-choose-us-area">
          <div className="container">
            <div className="row">
              <div className="why-choose-us-area__info">
                <h2> Why choose us?</h2>
                <p>
                  {" "}
                  A large part of our role is choosing which particular coffees
                  will be featured in our range. This means working closely with
                  the best coffee growers to give you a more impactful
                  experience on every level.
                </p>
              </div>
              <div className="why-choose-us-area__list-items">
                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/home/desktop/icon-coffee-bean.svg"
                      alt="coffee-bean"
                    />
                  </div>
                  <div className="text-box">
                    <h4> Best quality</h4>
                    <p>
                      Discover an endless variety of the world’s best artisan
                      coffee from each of our roasters.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/home/desktop/icon-gift.svg"
                      alt="coffee-bean"
                    />
                  </div>
                  <div className="text-box">
                    <h4> Exclusive benefits</h4>
                    <p>
                      Special offers and swag when you subscribe, including 30%
                      off your first shipment.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icon-box">
                    <img
                      src="/assets/home/desktop/icon-truck.svg"
                      alt="coffee-bean"
                    />
                  </div>
                  <div className="text-box">
                    <h4> Free shipping</h4>
                    <p>
                      We cover the cost and coffee is delivered fast. Peak
                      freshness: guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="how-it-works-area">
          <div className="container">
            <div className="row">
              <div className="how-it-works-area__title">
                <h4>How it works </h4>
              </div>
              <div className="how-it-works-area__list-items">
                <div className="list-item">
                  <span>01</span>
                  <h3> Pick your coffee</h3>
                  <p>
                    {" "}
                    Select from our evolving range of artisan coffees. Our beans
                    are ethically sourced and we pay fair prices for them. There
                    are new coffees in all profiles every month for you to try
                    out.
                  </p>
                </div>

                <div className="list-item">
                  <span>02</span>
                  <h3> Choose the frequency</h3>
                  <p>
                    Customize your order frequency, quantity, even your roast
                    style and grind type. Pause, skip or cancel your
                    subscription with no commitment through our online portal.
                  </p>
                </div>

                <div className="list-item">
                  <span>03</span>
                  <h3> Receive and enjoy!</h3>
                  <p>
                    We ship your package within 48 hours, freshly roasted. Sit
                    back and enjoy award-winning world-class coffees curated to
                    provide a distinct tasting experience.
                  </p>
                </div>
              </div>
              <div className="how-it-works-area__btn">
                <a href="#0" className="btn-main">
                  Create your plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
