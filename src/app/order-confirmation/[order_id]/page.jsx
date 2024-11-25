"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const OrderDetailsPage = ({ params }) => {
  const { order_id } = params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [token, setToken] = useState(
    typeof window !== "undefined" ? Cookies.get("ynmtoken") : null
  );
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/api/orders/getOrder/${order_id}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        console.log(data);
        setOrder(data);
      } catch (err) {
        console.error("Failed to fetch order details:", err);
        setError("Unable to load order details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [order_id]);

  useEffect(() => {
    console.log("order", order);
  }, [order]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-blue-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Order Details</h1>
      <p>Order ID: {order._id}</p>
      <p>Total Price: {order.orderDetails.totalPrice}</p>
      <h2>Cart Items:</h2>
      <ul>
        {order.orderDetails?.cart?.map((item) => (
          <li key={item._id}>
            <h3>{item.productId.name}</h3>
            <p>{item.productId.description}</p>
            <p>Price: {item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;
