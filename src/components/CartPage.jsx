// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import BillingInformation from "./BillingInformation";
import { useTheme } from "./ThemeContext";
import CartItem from "./CartItem";

// eslint-disable-next-line react/prop-types
const CartPage = ({ cart: data, count }) => {

  const { themeMode } = useTheme();

  const divStyle = {
    backgroundColor: themeMode === "dark" ? "#23272f" : "white",
  };
  const fontStyle = {
    color: themeMode === "dark" ? "#f6f7f9" : "#23272f",
  };
  const paperModeStyle = {
    backgroundColor: themeMode === "dark" ? "#7f7f7f" : "white",
  };

  const totalAmount = data.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price.replace('$', '')); 
    return acc + (itemPrice * count[item.id]);
  }, 0);


  return (
    <Container style={{ ...divStyle, ...fontStyle }}>
      <Typography variant="h4" gutterBottom align="center">
        Cart Details
      </Typography>
      <Grid container spacing={2}>
        { data ? data.map((item, index) => (
          <Grid item xs={4} key={index}>
            <CartItem data={item} count={count[item.id]} />
          </Grid>
        )) : ""}
      </Grid>
      <Paper style={{ ...paperStyle, ...fontStyle,...paperModeStyle }} elevation={12}>
        <BillingInformation totalAmount={totalAmount} />
      </Paper>
    </Container>
  );
};

const paperStyle = {
  padding: "16px",
  marginBottom: "20px",
};

export default CartPage;
