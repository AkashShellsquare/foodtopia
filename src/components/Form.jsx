// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useTheme } from "./ThemeContext";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));


const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  const { themeMode } = useTheme(); 

  const divStyle = {
    backgroundColor: themeMode === 'light' ? '#8BC6EC' : '#98a9ad',
    backgroundImage: themeMode === 'light'
      ? 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
      : 'linear-gradient(135deg, #98a9ad 0%, #575871 100%)',
  };

  
 

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      style={{ ...divStyle }}
    >
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          <span className="font-bold text-white">FoodTopia
          <img style={{height:"10rem"}} src="/src/Images/food-shopping-logo-template-design_460848-10299-removebg-preview.png" /></span>
        </h1>
      </div>

      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
      <div className="mr-4 text-white">
        Already have account? <span className="text-red-700 font-bold">Login</span>
      </div>
    </form>
  );
};

export default Form;
