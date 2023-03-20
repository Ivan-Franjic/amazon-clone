import { Link } from "react-router-dom";
import "./Home.css";
import Category from "../Components/Category/Category";

export default function Home() {
  return (
    <div className="flex justify-center relative mx-auto z-0 text-black bg-lgray">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="flex flex-wrap justify-center gap-5 mt-40 mb-5 lg:flex lg:justify-center lg:mt-1">
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="49538094"
              name="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="4903850"
              name="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="4903850"
              name="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-5 lg:flex lg:justify-center">
          <Link to={`/products/electronics`}>
            <Category
              id="4903850"
              name="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="23445930"
              name="Electronics"
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </Link>
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-5 lg:flex lg:justify-center">
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/electronics`}>
            <Category
              id="49538094"
              name="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Link>
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
          <Link to={`/products/books`}>
            <Category
              id="12321341"
              name="Books"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
