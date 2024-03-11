import React from "react";
import Amazon from "../images/amazon.png";

const ProductCarousel = ({ itemTitle, itemDescrip }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="10000"
      >
        <ol
          className="carousel-indicators"
          style={{ paddingBottom: "25px", borderRadius: "1px" }}
        >
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
            <img className="productImage" src={Amazon} alt="First slide" />
            <div className="productInfo">
              <h3>{itemTitle[0]}</h3>
              <p>{itemDescrip[0]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[0]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Second slide" />
            <div className="productInfo">
              <h3>{itemTitle[1]}</h3>
              <p>{itemDescrip[1]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[1]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Third slide" />
            <div className="productInfo">
              <h3>{itemTitle[2]}</h3>
              <p>{itemDescrip[2]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[2]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Fourth slide" />
            <div className="productInfo">
              <h3>{itemTitle[3]}</h3>
              <p>{itemDescrip[3]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[3]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Fifth slide" />
            <div className="productInfo">
              <h3>{itemTitle[4]}</h3>
              <p>{itemDescrip[4]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[4]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Sixth slide" />
            <div className="productInfo">
              <h3>{itemTitle[5]}</h3>
              <p>{itemDescrip[5]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[5]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Seventh slide" />
            <div className="productInfo">
              <h3>{itemTitle[6]}</h3>
              <p>{itemDescrip[6]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[6]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Eighth slide" />
            <div className="productInfo">
              <h3>{itemTitle[7]}</h3>
              <p>{itemDescrip[7]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[7]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Nine slide" />
            <div className="productInfo">
              <h3>{itemTitle[8]}</h3>
              <p>{itemDescrip[8]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[8]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
            </a>
          </div>

          <div className="carousel-item">
            <img className="productImage" src={Amazon} alt="Ten slide" />
            <div className="productInfo">
              <h3>{itemTitle[9]}</h3>
              <p>{itemDescrip[9]}</p>
              <p className="amazonAffiliateText">
                (Products contain Amazon.com affiliate links)
              </p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(
                itemTitle[9]
              )}&tag=${"giftfairy0c9-20"}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="buyProduct">View Product on Amazon</button>
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
