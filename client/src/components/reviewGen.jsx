import React from "react";

import FlipArrow from "./flipArrow.jsx";
import StarRatings from "react-star-ratings";

import ModalTitle from "./sliders.jsx";
import "../styles/review-generator.css";
import "../styles/sliders.css";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

const underline = {
  textDecoration: "underline",
  fontWeight: 500
};

const sliderNumber = () => {
  return Math.floor(Math.random() * 100);
};

const ReviewGenerator = props => {
  console.log(props);
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div
          className="card-header"
          id="headingOne"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
          onClick={props.flipArrow1}
        >
          <div className="box-title">
            <h3 id="shippingInfo">Free Shipping & Returns</h3>
          </div>
          <div className="shipping-arrow-div">
            <span className="arrows">
              <FlipArrow expanded={props.expandedState1} />
            </span>
          </div>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              Free standard shipping and 30-day free returns, only with
              NikePlus.
              <p style={underline}>
                Learn more Return policy exclusions apply.
              </p>
              <li>Standard / Arrives 2-4 Business Days</li>
              <li>Two-Day / Arrives 2-3 Business Days</li>
              <li>Next-Day / Arrives 1-2 Business Days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header"
          id="headingTwo"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          onClick={props.flipArrow2}
        >
          <div className="review-count">
            <h3 id="reviews">Reviews ({props.currReviews.length})</h3>
            <div id="reviewStar-arrow-div">
              <span className="review-star">
                <StarRatings
                  rating={props.starAvg}
                  starRatedColor="blue"
                  numberOfStars={5}
                  name="rating"
                  starDimension="19px"
                  starSpacing="2px"
                  starRatedColor="rgb(00, 00,00)"
                  isSelectable="false"
                  starHoverColor="null"
                />
              </span>

              <span className="review-arrow">
                <FlipArrow expanded={props.expandedState2} />
              </span>
            </div>
          </div>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div className="stars-avg">
              <div id="card-body-stars">
                <StarRatings
                  rating={props.starAvg}
                  starRatedColor="blue"
                  numberOfStars={5}
                  name="rating"
                  starDimension="18px"
                  starSpacing="2px"
                  starRatedColor="rgb(00, 00,00)"
                  isSelectable="false"
                  starHoverColor="null"
                />
              </div>
              <span className="avg-stars-button">{props.starAvg} Stars</span>
              <span id="write-review">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  style={{ textDecoration: "underline", color: "black" }}
                  onClick={props.modalOpen}
                >
                  Write a Review
                </button>
              </span>
            </div>
            {props.currReviews.slice(-3).map((element, index) => (
              <div className="review-item" key={index}>
                <p>{element.title}</p>
                <StarRatings
                  rating={Number(element.stars)}
                  numberOfStars={5}
                  name="rating"
                  starDimension="13px"
                  starSpacing="1.5px"
                  starRatedColor="rgb(00, 00,00)"
                  isSelectable="false"
                  starHoverColor="null"
                />
                <p style={{ display: "inline-block", padding: "5px" }}>
                  {element.user} - {element.date}
                </p>
                <p>{element.description}</p>
              </div>
            ))}
            <div id="more-reviews">
              <button
                className="btn btn-link collapsed"
                type="button"
                style={{ textDecoration: "underline", color: "black" }}
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                More Reviews
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModalLong"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: "100%", maxHeight: "99%" }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <ModalTitle
                      currReviews={props.currReviews}
                      starAvg={props.starAvg}
                      imgUrl={props.imgUrl}
                      shoeName={props.shoeName}
                      price={props.price}
                    />
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {props.currReviews.map((element, index) => (
                      <div className="modal-review-item" key={index}>
                        <div className="review-item-left">
                          <div className="all-review-stars">
                            <StarRatings
                              rating={Number(element.stars)}
                              numberOfStars={5}
                              name="rating"
                              starDimension="18px"
                              starSpacing="1.5px"
                              starRatedColor="rgb(00, 00,00)"
                              isSelectable="false"
                              starHoverColor="null"
                            />
                          </div>
                          <div className="review-all-sliders">
                            <div className="review-slider">
                              <div className="slider-header">Size</div>
                              <Slider value={sliderNumber()} />
                              <div className="slider-ptag1">Runs Small</div>
                              <div className="slider-ptag2">Runs Big</div>
                            </div>

                            <div className="review-slider">
                              <div className="slider-header">Comfort</div>
                              <Slider value={sliderNumber()} />
                              <div className="slider-ptag1">Uncomfortable</div>
                              <div className="slider-ptag2">
                                Very Comfortable
                              </div>
                            </div>
                            <div className="review-slider">
                              <div className="slider-header">Durability</div>
                              <Slider value={sliderNumber()} />
                              <div className="slider-ptag1">Not Durable</div>
                              <div className="slider-ptag2">Very Durable</div>
                            </div>
                          </div>
                        </div>

                        <div className="review-item-right">
                          <div className="review-title">{element.title}</div>

                          <div
                            id="username-date"
                            style={{ display: "inline-block", padding: "5px" }}
                          >
                            {element.user} - {element.date}
                          </div>

                          <div id="item-description">{element.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="modal-footer">FOOTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewGenerator;
window.ReviewGenerator = ReviewGenerator;
