import React, { useEffect } from "react";
import "./Products.css";
import Product from "../Components/Product/Product";
import ProductService from "../Common/Services/Product";

useEffect(() => {
  ProductService.getAll();
}, []);
export default function Products() {
  return (
    <div className="products">
      <div className="products__container">
        <div className="products_row">
          <Product
            id="12321341"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            name="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            rating={5}
            price={11.96}
            category="test"
            description="test"
          />
          <Product
            id="49538094"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            name="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            rating={4}
            price={239.0}
            category="test"
            description="test"
          />
          <Product
            id="4903850"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            rating={3}
            price={199.99}
            category="test"
            description="test"
          />
          <Product
            id="23445930"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            name="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            rating={5}
            price={98.99}
            category="test"
            description="test"
          />
          <Product
            id="3254354345"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            name="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            rating={4}
            price={598.99}
            category="test"
            description="test"
          />
          <Product
            id="90829332"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            rating={4}
            price={1094.98}
            category="test"
            description="test"
          />
        </div>
      </div>
    </div>
  );
}
