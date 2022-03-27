import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => {
      temp = temp + item.price;
    });
    setTotalAmount(Math.round(temp * 100) / 100);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteFromcart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  return (
    <Layout>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.image} height="80" width="80" />
                </td>

                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash onClick={() => deleteFromcart(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <h1 className="total-amount">Total Amount = {totalAmount} Rs/-</h1>
      </div>
      
      <div className="d-flex justify-content-end mt 3">
        <button className="place-order">Place Order</button>
      </div>
    </Layout>
  );
}

export default CartPage;
