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
        data-interval="10000"
      >
        <ol className="carousel-indicators" style={{ paddingBottom: "35px" }}>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
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
              <button className="buyProduct">Buy Product</button>
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
              <button className="buyProduct">Buy Product</button>
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
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Fourth slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[3]}</h2>
            <p>{itemDescrip[3]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[3]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Fifth slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[4]}</h2>
            <p>{itemDescrip[4]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[4]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Sixth slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[5]}</h2>
            <p>{itemDescrip[5]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[5]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Seventh slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[6]}</h2>
            <p>{itemDescrip[6]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[6]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>
          
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Eighth slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[7]}</h2>
            <p>{itemDescrip[7]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[7]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Nine slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[8]}</h2>
            <p>{itemDescrip[8]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[8]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
            </a>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={GiftfairyImage}
              alt="Ten slide"
              height={100}
              width={100}
            />
            <h2>{itemTitle[9]}</h2>
            <p>{itemDescrip[9]}</p>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[9]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">Buy Product</button>
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
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
