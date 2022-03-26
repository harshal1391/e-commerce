import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireproducts } from "../firecommerce-products";
import { async } from "@firebase/util";

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="container">
          <div className="row">
              {products.map((product) => {
                  return (
                    <div className="col-md-4">
                      <div className="m-2 p-1 product">
                        <p>{product.title}</p>
                        <div className="text-center">
                          <img
                            src={product.image}
                            alt=""
                            className="product-img"
                          />
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
      </div>
    </Layout>
  );
}

export default Homepage;
