import React from "react";
import ProductPage from "./Content.jsx";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export async function generateStaticParams() {
  const response = await fetch(`${serverUrl}/api/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const allProducts = await response.json();

  return allProducts.map((product) => ({ id: product._id }));
}

const page = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${serverUrl}/api/products/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const product = await response.json();
  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};

export default page;
