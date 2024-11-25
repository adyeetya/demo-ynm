"use client";

import React, { useEffect, useRef, useState } from "react";

const CryptoBarChart = () => {
  const canvasRef = useRef(null);
  const [cryptoData, setCryptoData] = useState({ bitcoin: 0, ethereum: 0 });

  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
      );
      const data = await response.json();
      setCryptoData({ bitcoin: data.bitcoin.usd, ethereum: data.ethereum.usd });
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchCryptoPrices, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bar chart properties
    const barWidth = 100;
    const barSpacing = 50;
    const canvasHeight = canvas.height;
    const maxPrice = Math.max(cryptoData.bitcoin, cryptoData.ethereum);

    // Chart scaling factor
    const scaleFactor = canvasHeight / maxPrice;

    // Draw Bitcoin bar
    ctx.fillStyle = "#FF5733"; // Bitcoin color
    ctx.fillRect(
      barSpacing,
      canvasHeight - cryptoData.bitcoin * scaleFactor,
      barWidth,
      cryptoData.bitcoin * scaleFactor
    );

    // Draw Ethereum bar
    ctx.fillStyle = "#4287f5"; // Ethereum color
    ctx.fillRect(
      barSpacing * 2 + barWidth,
      canvasHeight - cryptoData.ethereum * scaleFactor,
      barWidth,
      cryptoData.ethereum * scaleFactor
    );

    // Add labels
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(
      `Bitcoin: $${cryptoData.bitcoin}`,
      barSpacing,
      canvasHeight - 10
    );
    ctx.fillText(
      `Ethereum: $${cryptoData.ethereum}`,
      barSpacing * 2 + barWidth,
      canvasHeight - 10
    );
  }, [cryptoData]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border rounded-lg bg-white shadow-md"
      ></canvas>
    </div>
  );
};

export default CryptoBarChart;
