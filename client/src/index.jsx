import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ReviewGenerator from "./components/reviewGen.jsx";
import SignIn from "./components/sign-in.jsx";

const mousePointer = {
  cursor: "pointer"
};

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: "CJ0066-900",
      imgUrl: "",
      currentReviews: [],
      totalStars: 0,
      reviewsToShow: 0,
      expanded1: false,
      expanded2: false,
      modalShow: false,
      price: 0,
      shoeName: "something"
    };
    this.calculateAvgStars = this.calculateAvgStars.bind(this);
    this.flipArrow1 = this.flipArrow1.bind(this);
    this.flipArrow2 = this.flipArrow2.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.findCurrReviews = this.findCurrReviews.bind(this);
  }
  modalClose() {
    this.setState({ modalShow: false });
  }

  modalOpen() {
    this.setState({ modalShow: true });
  }

  flipArrow1() {
    this.setState({
      expanded1: !this.state.expanded1
    });
  }
  flipArrow2() {
    this.setState({
      expanded2: !this.state.expanded2
    });
  }

  findCurrReviews(arr) {
    let currentSku = this.state.sku;
    let activeReview;
    for (let x = 3; x < arr.length; x++) {
      if (arr[x]["sku"] === currentSku) {
        activeReview = arr[x].reviews;
      }
      break;
    }
    return activeReview;
  }

  fetchShoe() {
    Axios.get(
      `http://ec2-18-225-10-188.us-east-2.compute.amazonaws.com/api/images/${
        this.state.sku
      }`
    ).then(results => {
      this.setState({
        imgUrl: results.data[0]
      });
    });

    Axios.get(
      `http://ec2-18-225-10-188.us-east-2.compute.amazonaws.com/api/title/${
        this.state.sku
      }`
    )
      .then(results => {
        this.setState({
          shoeName: results.data.productName,
          price: results.data.price
        });
      })

      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchShoe();
    Axios.get(
      "http://ec2-3-16-213-178.us-east-2.compute.amazonaws.com/reviews"
    ).then(reviewData => {
      let activeReview = this.findCurrReviews(reviewData.data);
      console.log(reviewData.data);
      this.setState({
        currentReviews: activeReview,
        totalStars: this.calculateAvgStars(activeReview)
      });
    });
    window.addEventListener("productClickEvent", event => {
      this.setState({ sku: event.detail.sku }, () => {
        this.fetchShoe();
      });
    });
  }

  // writeReview(string){
  //   Axios.post("/reviews",{

  //   })
  // }

  calculateAvgStars(arr) {
    const reviewsArr = arr;
    //console.log("this is review arr", reviewsArr);
    let total = 0;
    for (let i = 0; i < reviewsArr.length; i++) {
      let stars = Number(reviewsArr[i].stars);
      //console.log(typeof stars);
      total = total + stars;
    }
    return total / reviewsArr.length;
  }

  render() {
    const { open } = this.state;
    //console.log("i should be showing a modal", this.state.modalShow);
    return (
      <div className="mainBox">
        <div className="cr-wrCustomerReviewser">
          <div className="cr-header">
            <div className="cr-header-title" />
          </div>

          <ReviewGenerator
            currReviews={this.state.currentReviews}
            expandedState1={this.state.expanded1}
            expandedState2={this.state.expanded2}
            reviewsToShow={this.state.reviewsToShow}
            flipArrow1={this.flipArrow1}
            flipArrow2={this.flipArrow2}
            starAvg={this.state.totalStars}
            modalOpen={this.modalOpen}
            imgUrl={this.state.imgUrl}
            shoeName={this.state.shoeName}
            price={this.state.price}
          />

          <SignIn show={this.state.modalShow} onHide={this.modalClose} />
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
window.CustomerReviews = CustomerReviews;

ReactDOM.render(
  <CustomerReviews />,
  document.getElementById("customer-reviews")
);
// Reviews({ props.currReviews.length })
//   < StarRatings
// rating = { props.starAvg }
// starRatedColor = "blue"
// numberOfStars = { 5}
// name = "rating"
// starDimension = "20px"
// starSpacing = "15px"
// starRatedColor = "rgb(00, 00,00)"
// isSelectable = "false"
// starHoverColor = "null"
//   />
//   <span>
//     <FlipArrow expanded={props.expandedState} />
//   </span>
