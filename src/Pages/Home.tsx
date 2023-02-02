import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import Category from "../Components/Category/Category";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="49538094"
              name="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Link>
        </div>

        <div className="home__row">
          <Link to={`/products/electronics`}>
            <Category
              id="4903850"
              name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="23445930"
              name="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </Link>
        </div>

        <div className="home_row">
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="49538094"
              name="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Link>
        </div>

        <div className="home__row">
          <Link to={`/products/electronics`}>
            <Category
              id="90829332"
              name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="3254354345"
              name="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
