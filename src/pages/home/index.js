import React from "react";
import { useStyles } from "./style";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.quote}>
        <h2>
          If humanity doesn't land on Mars in my lifetime,
          <br /> I would be very disappointed.
        </h2>
        <p>-Elon Musk</p>
      </div>
    </div>
  );
};

export default Home;
