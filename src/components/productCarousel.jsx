import React from "react";
import GiftfairyImage from "../images/giftfairy3.png";
import GiftFairy1 from "../images/giftFairy.png";

const ProductCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={GiftfairyImage}
              alt="First slide"
              height={300}
              width={300}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={GiftFairy1}
              alt="Second slide"
              height={300}
              width={300}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={GiftfairyImage}
              alt="Third slide"
              height={300}
              width={300}
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
