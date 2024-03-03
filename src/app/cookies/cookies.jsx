"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import * as HeroIcons from "@heroicons/react/outline";

const CookieBanner = ({ onAccept, onDecline }) => {
  const [showBanner, setShowBanner] = useState(true);

  const { XIcon } = HeroIcons;

  //   useEffect(() => {
  //     const hasAcceptedCookies = Cookies.get("cookiesAccepted");

  //     if (hasAcceptedCookies) {
  //       setShowBanner(false);
  //     }
  //   }, []);

  const handleAccept = () => {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000); // Expires in 365 days
    Cookies.set("cookiesAccepted", now.toISOString(), {
      expires: expirationDate,
    });

    // Log the timestamp to the console
    console.log("Cookies accepted at:", now.toISOString());

    setShowBanner(false);
    onAccept(); // You can execute additional logic on accept if needed
  };

  const handleDecline = () => {
    setShowBanner(false);
    onDecline(); // You can execute additional logic on decline if needed
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <div
      style={{
        display: showBanner ? "flex" : "none",
        position: "fixed",
        bottom: "30px",
        left: "20px",
        background: "#f0f0f0",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 999,
        flexDirection: "column", // Set flex direction to column
        alignItems: "flex-start", // Align items to the start of the flex container
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {" "}
          {/* Wrap in a flex container */}
          <img
            src="/assets/images/Icon.svg" // Replace with the path to your image
            alt="Cookie Image"
            className="mr-2 h-6 w-6" // Adjust the size and spacing as needed
          />
          <div>
            <p className="font-bold text-lg mb-1">We use cookies</p>
            <p className="text-sm">
              By continuing to use this site, you accept our use of cookies.
            </p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="p-1 focus:outline-none text-xs"
        >
          <XIcon className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="mt-2 w-full ps-8 flex space-x-5">
        <button
          onClick={handleAccept}
          className="mb-2 w-full sm:w-1/2 md:w-1/3 px-2 py-1 bg-green-500 text-white rounded text-xs"
          style={{ borderRadius: "8px", height: "31px" }}
        >
          Accept Cookies
        </button>
        <button
          onClick={handleDecline}
          className="mb-2 w-full sm:w-1/2 md:w-1/3 px-2 py-1 bg-red-500 text-white rounded text-xs"
          style={{ borderRadius: "8px", height: "31px"  }}
        >
          Reject Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
