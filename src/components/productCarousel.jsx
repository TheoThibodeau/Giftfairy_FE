import React from "react";
import Amazon from "../images/amazon.png";

const ProductCarousel = ({ itemTitle, itemDescrip }) => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="10000">
        <ol className="carousel-indicators" style={{ paddingBottom: "25px", borderRadius: "1px" }}>
          {itemTitle.map((title, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active': ''}>
            </li>
          ))}
        </ol>
        <div className="carousel-inner">
          {itemTitle.map((title, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
             <img className="productImage" src={Amazon} alt={`Slide ${index + 1}`} />
             <div className="productInfo">
                <h3>{title}</h3>
                <p>{itemDescrip[index]}</p>
                <p className="amazonAffiliateText">
                  (Products contain Amazon.com affiliate links)
                </p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=${encodeURIComponent(title)}
                &tag=${"giftfairy0c9-20"}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="buyProduct">View Product on Amazon</button>
              </a>
           </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
