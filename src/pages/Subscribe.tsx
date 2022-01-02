import React, { Fragment, useEffect, useState } from "react";
import AccordionData from "../data/subscribe-data.json";

interface contentData {
  id: number;
  title: string;
  description: string;
  selected: boolean;
}
interface optionData {
  id: number;
  title: string;
  open: boolean;
  active: boolean;
  content: contentData[];
}

interface finalDataProps {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

const Subscribe = () => {
  const [option, setOption] = useState<optionData[]>(AccordionData);
  const [finalData, setFinalData] = useState<finalDataProps>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });
  useEffect(() => {
    const grind = document.getElementById("3");
    const btn = document.querySelector(".btn-main.subscribe");

    if (
      finalData[0] !== "" &&
      finalData[1] !== "" &&
      finalData[2] !== "" &&
      (finalData[3] !== "" || finalData[0] === "Capsule") &&
      finalData[4] !== ""
    ) {
      btn?.classList.remove("disabled");
    } else {
      btn?.classList.add("disabled");
    }

    if (finalData[0] === "Capsule") {
      grind?.parentElement?.classList.add("disabled");
    } else {
      grind?.parentElement?.classList.remove("disabled");
    }
  });

  const handleOption = (
    e: any,
    id: number,
    title: string,
    description: string,
    parentId: number
  ) => {
    e.preventDefault();

    option.forEach((item) => {
      item.active = false;
      if (parseInt(`${item.id}`) === parentId) {
        item.content.forEach((item) => {
          item.selected = false;
        });
        item.content[id].selected = true;
      }
    });

    if (finalData[0] === "Capsule") {
      option[
        parentId === 2 ? parentId + 2 : parentId === 4 ? 4 : parentId + 1
      ].open = true;
    } else {
      option[parentId === 4 ? 4 : parentId + 1].open = true;
    }

    option[parentId === 4 ? 4 : parentId + 1].active = true;

    setFinalData({ ...finalData, [parentId]: title });
    setOption([...option]);
  };

  const handleSummary = (e: any) => {
    e.preventDefault();
    const modal = document.querySelector(".modal-area");

    modal?.classList.toggle("open");
  };

  const handleCheckout = (e: any) => {
    e.preventDefault();
    const modal = document.querySelector(".modal-area");

    modal?.classList.toggle("open");

    setFinalData({ ...finalData, 0: "", 1: "", 2: "", 3: "", 4: "" });
    option.forEach((item) => {
      item.active = false;
      item.open = false;

      item.content.forEach((item) => {
        item.selected = false;
      });
    });
    option[0].active = true;
    option[0].open = true;
  };

  return (
    <Fragment>
      <section>
        <div className="subscribe-banner-area">
          <div className="container">
            <div className="row">
              <div className="subscribe-banner-area__info">
                <h1>Create plan</h1>
                <p>
                  {" "}
                  Coffee the way you wanted it to be. For coffee delivered
                  tomorrow, or next week. For whatever brew method you use. For
                  choice, for convenience, for quality.
                </p>
              </div>
              <div className="subscribe-banner-area__img">
                <div className="img-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="subscribe-how-it-works-area">
          <div className="container">
            <div className="row">
              <div className="subscribe-how-it-works-area__list-items">
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
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pick-plan-area">
          <div className="container">
            <div className="row">
              <div className="pick-plan-area__sidebar">
                <div className="list-links">
                  <a
                    href="#1"
                    className={`list-link ${
                      option[0].active === true ? "active" : ""
                    }`}
                  >
                    <span>01</span> Preferences
                  </a>

                  <a
                    href="#2"
                    className={`list-link ${
                      option[1].active === true ? "active" : ""
                    }`}
                  >
                    <span>02</span> Bean Type
                  </a>

                  <a
                    href="#3"
                    className={`list-link ${
                      option[2].active === true ? "active" : ""
                    }`}
                  >
                    <span>03</span> Quantity
                  </a>

                  <a
                    href="#4"
                    className={`list-link ${
                      option[3].active === true ? "active" : ""
                    }`}
                  >
                    <span>04</span> Grind Option
                  </a>

                  <a
                    href="#5"
                    className={`list-link ${
                      option[4].active === true ? "active" : ""
                    }`}
                  >
                    <span>05</span> Deliveries
                  </a>
                </div>
              </div>
              <div className="pick-plan-area__content">
                <div className="plan">
                  {option.map((item) => (
                    <div className="list-accordions" key={item.id}>
                      <div
                        className={`list-accordion  ${
                          item.open === true ? "open" : ""
                        }`}
                      >
                        <div className="dropdown " id={`${item.id}`}>
                          <h2>{item.title}</h2>
                          <svg
                            width="19"
                            height="13"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg"
                          >
                            <path
                              d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                              fill="#0E8784"
                              fillRule="nonzero"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          {item.content.map((element) => (
                            <a
                              href="#0"
                              className={`option ${
                                element.selected === true ? "active" : ""
                              }`}
                              key={element.id}
                              onClick={(e: any) =>
                                handleOption(
                                  e,
                                  element.id,
                                  element.title,
                                  element.description,
                                  item.id
                                )
                              }
                            >
                              <div className="inner">
                                <h4>{element.title}</h4>
                                <p>{element.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-summary">
                  <span className="order">ORDER SUMMARY</span>
                  <blockquote>
                    I drink my coffee using
                    <span className="text">
                      {finalData[0] === "" ? "_____" : finalData[0]}
                    </span>
                    , with a
                    <span className="text-style-2">
                      {finalData[1] === "" ? "_____" : finalData[1]}
                    </span>
                    type of bean.
                    <span className="text-style-3">
                      {finalData[2] === "" ? "_____" : finalData[2]}
                    </span>
                    {finalData[0] !== "Capsule" && (
                      <>
                        ground ala
                        <span className="text-style-4">
                          {finalData[3] === "" ? "_____" : finalData[3]}
                        </span>
                      </>
                    )}
                    , sent to me
                    <span className="text-style-4">
                      {finalData[4] === "" ? "_____" : finalData[4]}
                    </span>
                    .
                  </blockquote>
                </div>
                <div className="btn">
                  <a
                    href="#0"
                    className="btn-main subscribe disabled"
                    onClick={(e) => handleSummary(e)}
                  >
                    Creat your plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="modal-area">
          <div className="modal-inner">
            <div className="modal-content">
              <div className="modal-header">
                <h2> Order Summary</h2>
              </div>
              <div className="modal-body">
                <blockquote>
                  I drink my coffee using
                  <span className="text">
                    {finalData[0] === "" ? "_____" : finalData[0]}
                  </span>
                  , with a
                  <span className="text-style-2">
                    {finalData[1] === "" ? "_____" : finalData[1]}
                  </span>
                  type of bean.
                  <span className="text-style-3">
                    {finalData[2] === "" ? "_____" : finalData[2]}
                  </span>
                  {finalData[0] !== "Capsule" && (
                    <>
                      ground ala
                      <span className="text-style-4">
                        {finalData[3] === "" ? "_____" : finalData[3]}
                      </span>
                    </>
                  )}
                  , sent to me
                  <span className="text-style-4">
                    {finalData[4] === "" ? "_____" : finalData[4]}
                  </span>
                  .
                </blockquote>

                <p>
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.
                </p>
              </div>
              <div className="modal-footer">
                <span>$14.00/ mo</span>
                <a
                  href="#0"
                  className="btn-main"
                  onClick={(e) => handleCheckout(e)}
                >
                  Checkout
                </a>
              </div>

              <div className="modal-footer mobile">
                <a
                  href="#0"
                  className="btn-main mobile"
                  onClick={(e) => handleCheckout(e)}
                >
                  Checkout - <span>$14.00/mo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Subscribe;
