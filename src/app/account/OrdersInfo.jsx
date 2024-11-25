"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const OrdersInfo = () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [token, setToken] = useState(
    typeof window !== "undefined" ? Cookies.get("ynmtoken") : null
  );
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/api/orders/getUserOrderHistory`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          if (data.success) {
            setOrderHistory(data.orderHistory);
          }
        }
      } catch (error) {
        console.error("Failed to fetch order history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [token]);

  useEffect(() => {
    // Process order history into a displayable format
    if (orderHistory?.length > 0) {
      const formattedOrders = orderHistory.map((order) => {
        // const orderId = order?.orderId;
        console.log(order.orderId.createdAt);
        const formattedDate = new Date(
          order.orderId.createdAt
        ).toLocaleDateString(
          "en-US", // You can change this to a different locale if needed
          {
            year: "numeric",
            month: "long", // Options: "long", "short", "numeric"
            day: "numeric",
          }
        );

        const createdAt = formattedDate;
        const products = order?.orderId?.orderDetails?.cart?.map((item) => {
          const { name, category, mrp } = item?.productId || {};
          const quantity = item?.quantity || 0;
          return { name, category, mrp, quantity };
        });

        return { createdAt, products };
      });

      setOrderedProducts(formattedOrders);
    }
  }, [orderHistory]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orderedProducts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orderedProducts.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="mb-2">
                <h3 className="font-semibold text-lg">
                  Order ID: {order.orderId}
                </h3>
                <p className="text-gray-500 text-sm">
                  Placed on: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-md mb-2">Items:</h4>
                {order.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="border-b py-2 last:border-b-0 flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        Category: {product.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <p>₹{product.mrp}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};
