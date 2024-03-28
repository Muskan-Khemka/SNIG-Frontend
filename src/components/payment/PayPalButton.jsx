// PayPalButton.js

import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const PayPalCheckoutButton = ({ amount, onSuccess }) => {
  const handleSuccess = (details, data) => {
    onSuccess(data);
  };

  return (
    <PayPalButton
      amount={amount}
      onSuccess={handleSuccess}
      options={{
        clientId:
          "AUoQ_vz_gwA2-cqyyQD2CHvGILhFIzFKMzRReOyi4C9h5J58ZhqcsgsaqFKvuLwlGGHgqCIQ7kqj2ScO",
      }}
    />
  );
};

export default PayPalCheckoutButton;