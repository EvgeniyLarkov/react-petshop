import React from "react";
import useStyles from "../../styles/components/Filters";
import { Input, InputAdornment, Slider } from "@material-ui/core";

const Priceslider = ({ changePriceRange, minPrice, maxPrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.filter__priceslider}>
      <Input
        startAdornment={<InputAdornment position="end">$</InputAdornment>}
        className={classes.filter__rangeinput}
        placeholder="Min"
        onChange={({ target: { value } }) =>
          changePriceRange([+value, maxPrice])
        }
        value={minPrice}
      />
      <Slider
        value={[minPrice, maxPrice]}
        max={5000}
        onChange={(event, newValue) => changePriceRange(newValue)}
      />
      <Input
        startAdornment={<InputAdornment position="end">$</InputAdornment>}
        className={classes.filter__rangeinput}
        placeholder="Max"
        onChange={({ target: { value } }) =>
          changePriceRange([minPrice, +value])
        }
        value={maxPrice}
      />
    </div>
  );
};

export default Priceslider;
