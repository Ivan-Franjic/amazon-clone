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
          <Link to={`/products/kitchen`}>
            <Category
              id="49538094"
              name="Kitchen Appliances"
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
          <Link to={`/products/garden`}>
            <Category
              id="4903850"
              name="Garden & Outdoors"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/garden.jpg?alt=media&token=38972824-4ce0-4f8a-a9a3-a8910b138c1a"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-5 lg:flex lg:justify-center">
          <Link to={`/products/sport`}>
            <Category
              id="4903850"
              name="Sport"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/bicycle.webp?alt=media&token=ad245fd0-ccb8-4774-b0b5-e8c9e5afa64e"
            />
          </Link>
          <Link to={`/products/smart_home`}>
            <Category
              id="23445930"
              name="Smart Home"
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </Link>
          <Link to={`/products/furniture`}>
            <Category
              id="12321341"
              name="Furniture"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/furniture.webp?alt=media&token=46570e62-9062-4eea-8ff6-c18e45f4dd08"
            />
          </Link>
          <Link to={`/products/car_accessories`}>
            <Category
              id="12321341"
              name="Car Accessories"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/car_cover.jpg?alt=media&token=3a2eb453-6eb7-4b39-8bd0-60bf5dd8a8df"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-5 lg:flex lg:justify-center">
          <Link to={`/products/tools`}>
            <Category
              id="12321341"
              name="Tools"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/tools.jpg?alt=media&token=adc76595-88a7-4d2b-a357-42f8fd396370"
            />
          </Link>
          <Link to={`/products/camping_equipment`}>
            <Category
              id="49538094"
              name="Camping Equipment"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/tent.webp?alt=media&token=0418375b-7e48-463e-88d7-2d7ee6da393f"
            />
          </Link>
          <Link to={`/products/clothes`}>
            <Category
              id="12321341"
              name="Clothes"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/clothes.jpg?alt=media&token=b299d44f-c334-4e15-95a6-7cabff462b3d"
            />
          </Link>
          <Link to={`/products/makeup`}>
            <Category
              id="12321341"
              name="Makeup"
              image="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/clothes.jpg?alt=media&token=b299d44f-c334-4e15-95a6-7cabff462b3d"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
