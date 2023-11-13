/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, Button, Input, TextField } from "@mui/material";
import SimpleSnackbar from "./SimpleSnackbar";

const BillingInformation = (amount) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
  });

  const [validation, setValidation] = useState(false);

  console.log(userInfo, "userinfo");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const razorPayinit = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline, failed to load...");
      return;
    }

    const options = {
      key: "rzp_test_Q3uKNb9YbqSLpf",
      currency: "INR",
      amount: Object.values(amount)[0] * 100,
      name: "foodtopia payment",
      description: "Thanks for your order",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment successfully");
        showSnackBar(true);
      },
      prefill: {
        name: "foodtopia ",
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  const showSnackBar = (res) => {
    if (res) {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const userData = (e) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const isValidName = nameRegex.test(e.target.value);

    if (!isValidName) {
      setValidation(true);
    } else {
      setValidation(false);
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const totalAmount = amount ? Object.values(amount) : 0;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Billing Information
      </Typography>
      <div className="flex flex-col gap-2">
      <div>
        <TextField
          label={"name"}
          fullWidth
          color="primary"
          type="text"
          name="name"
          onChange={userData}
          helperText={validation ? "please enter a value" : ""}
          error={validation ? "error" : null}
        />
      </div>
      <div>
        <TextField
          label={"addres"}
          fullWidth
          type="text"
          name="address"
          onChange={userData}
          helperText={validation ? "please enter a value" : ""}
          error={validation ? "error" : null}
        />
      </div>
      </div>
      <div>
        <Typography gutterBottom>Total : {totalAmount}</Typography>
      </div>
      {userData && (
        <Button
          onClick={() => {
            if (!validation && totalAmount) razorPayinit(totalAmount);
          }}
          variant="contained"
          color="primary"
        >
          Place Order
        </Button>
      )}

      <SimpleSnackbar
        open={snackbarOpen}
        handleClose={handleCloseSnackbar}
        message="Payment Successful"
        severity="success"
      />
    </div>
  );
};

export default BillingInformation;
