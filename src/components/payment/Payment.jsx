import React, { useState, useContext } from "react";
import axios from "axios";
import PayPalCheckoutButton from "./PayPalButton";
import Context from "../../context";
import "./Payment.css";

const amount1 = localStorage.getItem("amount1");
const token = localStorage.getItem("token");
const subscriptionPlans = {
  299: "tier1",
  699: "tier2",
  999: "tier3",
};
const App = () => {
  // const [selectedAmount, setSelectedAmount] = useState("");
  const [orderId, setOrderId] = useState("");
  const context = useContext(Context);
  const { setSubscribed } = context;
  const handlePayPalSuccess = async (data) => {
    try {
      // Make a POST request to your backend with the selected amount
      const response = await axios.post(
        "http://localhost:4000/api/paypal/checkout",
        {
          amount: amount1,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { orderId } = response.data;
      setOrderId(orderId);
      setSubscribed(true);
      // axios request to backend
      const sub = await axios.get("http://localhost:4000/user/subscription", {
        headers: {
          Authorization: token,
        },
      });
      console.log(sub.data.subscription);
      console.log(sub.data.subscribedAt);
      localStorage.setItem("subscription", sub.data.subscription);
      localStorage.setItem("subscribedAt", sub.data.subscribedAt);
    } catch (error) {
      console.error("Error processing PayPal checkout:", error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Selected Plan: {subscriptionPlans[amount1]}</h2>
      <div classname="paypal-button-container">
        <PayPalCheckoutButton
          amount={amount1}
          onSuccess={handlePayPalSuccess}
        />
      </div>
      {orderId && (
        <p>
          Subscription added successfully. You are now a member{" "}
          {subscriptionPlans[amount1]}. PayPal order ID: {orderId}
        </p>
      )}
    </div>
  );
};
export default App;
