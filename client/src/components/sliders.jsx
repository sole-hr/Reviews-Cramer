import React from "react";
//import Slider from "@material-ui/lab/Slider";
import StarRatings from "react-star-ratings";
import "../styles/sliders.css";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

// const styles = {
//   root: {
//     width: 300
//   },
//   slider: {
//     padding: "15px 0px"
//   }
// };

const ModalTitle = props => {
  // console.log(props);
  return (
    <div id="modal-title-div">
      <div id="img-box-review">
        <img src={props.imgUrl} className="modal-image-review" />
        <p id="shoe-name-review">{props.shoeName}</p>
        <div id="shoe-price-review">$ {props.price}</div>
      </div>
      <div>
        <h5
          className="modal-title"
          id="modal-title-id"
          style={{
            top: "44px",
            color: "#111",
            fontFamily: "Helvetica Neue, Helvetica,Arial,sans-serif",
            fontSize: "28px",

            textTransform: "uppercase",
            letterSpacing: "0.05rem",
            color: "#111",
            fontWeight: 500,
            display: "inline - block",
            lineHeight: 1,
            margin: " 0 5px"
          }}
        />

        <div id="review-length">
          <span id="modal-review-amount">
            {props.currReviews.length} Reviews
          </span>
          <div id="modal-stars">
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
          </div>
        </div>
      </div>
      <div> </div>
      <div id="slider-one">
        <div className="slider-header">Size</div>
        <Slider value={80} />
        <div className="slider-ptag1">Runs Small</div>
        <div className="slider-ptag2">Runs Big</div>
      </div>

      <div id="slider-two">
        <div className="slider-header">Comfort</div>
        <Slider value={90} />
        <div className="slider-ptag1">Uncomfortable</div>
        <div className="slider-ptag2">Very Comfortable</div>
      </div>
      <div id="slider-three">
        <div className="slider-header">Durability</div>
        <Slider value={60} />
        <div className="slider-ptag1">Not Durable</div>
        <div className="slider-ptag2">Very Durable</div>
      </div>
    </div>
  );
};

export default ModalTitle;
window.ModalTitle = ModalTitle;
