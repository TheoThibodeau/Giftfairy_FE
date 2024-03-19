import React from "react";
import Amazon from "../images/amazon.png";

const ProductCarousel = ({ itemTitle, itemDescrip }) => {
  return (
    <>
      {/* Div to contain product carousel - javascript/bootstrap carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="10000">
        {/* Ordered list for carousel indicators */}
        <ol className="carousel-indicators" style={{ paddingBottom: "25px", borderRadius: "1px" }}>
          {/* Map through itemTitle array to generate proper number of list item indicators for items */}
          {/* If index === 0 then assign it a class name of 'active' to initialize first product/carousel */}
          {itemTitle.map((title, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active': ''}>
            </li>
          ))}
        </ol>
        <div className="carousel-inner">
          {/* Map through itemTitle array to generate cards for product carousel */}
          {/* If index === 0 then assign it a class name of 'active' to initialize first product/carousel */}
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
                &tag=${"giftfairy0c9-20"}`} /* Amazon Affiliate id*/
                target="_blank"
                rel="noreferrer"
              >
                <button className="buyProduct">View Product on Amazon</button>
              </a>
           </div>
          ))}
        </div>
        {/* Left arrow to traverse through product carousel back to previous item */}
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        {/* Right arrow to traverse through product carousel forward to next item */}
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ProductCarousel;
