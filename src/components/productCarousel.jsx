import React from "react";
import GiftfairyImage from "../images/giftfairy3.png";
import GiftFairy1 from "../images/giftFairy.png";

const ProductCarousel = ({ itemTitle, itemDescrip }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="15000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="First slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[0]}</h2>
            <p>{itemDescrip[0]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[0]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftFairy1}
              alt="Second slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[1]}</h2>
            <p>{itemDescrip[1]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[1]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Third slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[2]}</h2>
            <p>{itemDescrip[2]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[2]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Buy Product</button>
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
