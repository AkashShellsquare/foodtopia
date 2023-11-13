// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useTheme } from "./ThemeContext";


const CartItem = ( item ) => {
  const { data ,count } = item;
  const { themeMode } = useTheme(); 

  const divStyle = {
    backgroundColor: themeMode === 'dark' ? '#23272f' : 'white',
  };
  const fontStyle = {
    color: themeMode === 'dark' ? '#f6f7f9' : '#23272f',
  }

  return (
    <Card style={{...divStyle,...fontStyle}}>
      <CardMedia component="img" alt={data.name} height="140" image={data.image} />
      <CardContent>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="body2">Price: {data.price}</Typography>
        <Typography variant="body2">Quantity: {count}</Typography>
      </CardContent>
    </Card>
  );
};

export default CartItem;
  