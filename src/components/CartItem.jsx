// eslint-disable-next-line no-unused-vars
import React, { useReducer } from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { useTheme } from "./ThemeContext";
import CartPage from "./CartPage";

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

const CartItem = (item) => {
  const { data , count } = item;
  const { themeMode } = useTheme();

  const initialState = {count}

  const [state, dispatch] = useReducer(reducer, initialState);

  const divStyle = {
    backgroundColor: themeMode === 'dark' ? '#23272f' : 'white',
  };
  const fontStyle = {
    color: themeMode === 'dark' ? '#f6f7f9' : '#23272f',
  };

  return (
    <>
    <Card style={{ ...divStyle, ...fontStyle }}>
      <CardMedia
        component="img"
        alt={data.name}
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="body2">Price: {data.price}</Typography>
        <Typography variant="body2">
          <Button
            variant="outlined"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            +
          </Button>
          Quantity: {state.count}
          <Button
            variant="outlined"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            -
          </Button>
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default CartItem;
