import { useEffect, useState } from "react";
import Product from "../Components/Product/Product";
import { Link, useParams } from "react-router-dom";
import { db } from "../Common/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useGlobalContext } from "../Common/StateProvider";
import { actionTypes } from "../Common/reducer";
import { IProductData } from "../Types/Product.type";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { categoryName } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
        rating_total: doc.data().rating_total,
        price: doc.data().price,
        quantity: doc.data().quantity,
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
    <>
      {loading && <p>{t("loading")}</p>}
      {!loading && (
        <div className="flex flex-wrap justify-center gap-5 mb-96 mt-10 lg:mx-10">
          {state.products[1].map((item: IProductData) => (
            <Link
              to={`/productdetails/${item.category}/${item.id}`}
              key={item.id}
            >
              <Product
                id={item.id}
                image={item.image}
                name={item.name}
                rating={item.rating}
                rating_total={item.rating_total}
                price={item.price}
                quantity={item.quantity}
                category={item.category}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
