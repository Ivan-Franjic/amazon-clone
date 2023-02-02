import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Components/Product/Product";
import { Link, useParams } from "react-router-dom";
import { db } from "../Common/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useGlobalContext } from "../Common/StateProvider";
import reducer, { initialState, actionTypes } from "../Common/reducer";

export default function Products() {
  const { categoryName } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const productscol = query(
      collection(db, "products"),
      where("category", "==", categoryName)
    );
    const querySnapshot = await getDocs(productscol);
    dispatch({
      type: actionTypes.GET_PRODUCTS,
      item: querySnapshot.docs.map((doc) => ({
        id: doc.id,
        image: doc.data().image,
        name: doc.data().name,
        rating: doc.data().rating,
        price: doc.data().price,
        category: doc.data().category,
        description: doc.data().description,
      })),
    });
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      {loading && <p>Loading</p>}
      {!loading && (
        <div className="products__container">
          <div className="products_row">
            {state.products[1].map((item: any) => (
              <Link to={`/productdetails/${item.id}`}>
                <Product
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
