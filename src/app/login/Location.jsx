"use client";
import React, { useState } from "react";

const Location = ({ onAddressFetch }) => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const googleApiKey = process.env.NEXT_PUBLIC_GEOCODING_API_KEY;

  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      const url =
        'src="https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&libraries=marker&v=beta&solution_channel=GMP_CCS_reversegeocoding_v3"';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=marker&v=beta&solution_channel=GMP_CCS_reversegeocoding_v3`;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject("Failed to load Google Maps script");
      document.body.appendChild(script);
    });
  };

  const fetchAddressUsingJavaScriptAPI = async (latitude, longitude) => {
    try {
      // Load the Google Maps script if it's not already loaded
      await loadGoogleMapsScript();

      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: latitude, lng: longitude };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK" && results[0]) {
          const result = results[0];
          const addressComponents = result.address_components;

          const getComponent = (type) =>
            addressComponents.find((component) =>
              component.types.includes(type)
            )?.long_name || "";

          const streetAddress = addressComponents
            .filter(
              (component) =>
                !component.types.some((type) =>
                  [
                    "locality",
                    "administrative_area_level_1",
                    "postal_code",
                    "country",
                  ].includes(type)
                )
            )
            .map((component) => component.long_name)
            .join(", ");

          const locationDetails = {
            address: streetAddress,
            city: getComponent("locality"),
            state: getComponent("administrative_area_level_1"),
            postalCode: getComponent("postal_code"),
            country: getComponent("country"),
          };
          console.log("locationDetails :", locationDetails);

          onAddressFetch(locationDetails);
        } else {
          alert("Unable to fetch address details using Google Maps.");
        }
      });
    } catch (error) {
      console.error("Error using JavaScript API for reverse geocoding:", error);
      alert("An error occurred while fetching the address.");
    }
  };

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude, "Longitude:", longitude);
          fetchAddressUsingJavaScriptAPI(latitude, longitude);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.error("Geolocation error:", error.message);
          alert("Please allow location access.");
          setIsLocationEnabled(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsLocationEnabled(false);
    }
  };

  return (
    <div className="my-8">
      <h2>Location Access</h2>
      <div className="my-8">
        <label>
          <input
            type="checkbox"
            className="mr-2 w-4 h-4"
            checked={isLocationEnabled}
            onChange={(e) => {
              const checked = e.target.checked;
              setIsLocationEnabled(checked);
              if (checked) {
                handleLocationAccess();
              }
            }}
          />
          Detect My Location
        </label>
      </div>

      {loading && <p>Fetching location...</p>}
    </div>
  );
};

export default Location;
