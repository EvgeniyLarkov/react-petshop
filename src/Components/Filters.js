import React from "react";
import useStyles from "../styles/components/Filters";
import { IconButton } from "@material-ui/core";
import {
  Button,
  Checkbox,
  Input,
  InputAdornment,
  MenuItem,
  Slider,
} from "@material-ui/core";
import { Select } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";

const sortTypes = ["name", "price"];
const filterTypes = {
  allIds: ["rating"],
  Ids: {
    rating: {
      data: [0, 1, 2, 3, 4, 5],
      type: "multicheckbox",
      name: "By rating",
    },
  },
};

export default function Filter({
  currentSort,
  changeSort,
  filters,
  changePriceRange,
  changeFilterValue,
  applyFilters,
  removeFilters,
  state,
}) {
  const [minPrice, maxPrice] = filters.priceRange;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const createFilterItem = (id, label, data, type, handler) => {
    switch (type) {
      case "multicheckbox": {
        return (
          <div className={classes.filters} key={id}>
            <Typography className={classes.filter__label}>{label}</Typography>
            <FormControl className={classes.filter__input}>
              <Select
                id={id}
                value={filters[id]}
                onChange={({ target: { value } }) => handler(id, value)}
                className={classes.filter__input}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>none</em>;
                  }
                  return selected.join(", ");
                }}
                multiple
              >
                {data.map((item, index) => (
                  <MenuItem value={item} key={`${item}${index}`}>
                    <Checkbox checked={filters[id].indexOf(item) > -1} />
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        );
      }
      default:
        return "";
    }
  };

  return (
    <div className={`${classes.root} ${classes.root__margin}`}>
      <div className={classes.root__container}>
        <FilterListIcon />
        <Button
          aria-label="apply changes"
          variant="outlined"
          color="secondary"
          className={classes.filter__button}
          onClick={() => applyFilters()}
          disabled={!(state === "changed")}
        >
          Apply
        </Button>
        <IconButton
          aria-label="delete"
          onClick={() => removeFilters()}
          className={classes.filter__button}
          disabled={!(state === "changed")}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
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
        {filterTypes.allIds.map((id) =>
          createFilterItem(
            id,
            filterTypes.Ids[id].name,
            filterTypes.Ids[id].data,
            filterTypes.Ids[id].type,
            changeFilterValue
          )
        )}
      </div>
      <div className={classes.sort}>
        <div className={classes.sort__inner}>
          <Typography className={classes.sort__label}>Sort by:</Typography>
          <FormControl>
            <Select
              value={currentSort}
              onChange={changeSort}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
            >
              {sortTypes.map((type, index) => (
                <MenuItem value={type} key={`${type}${index}`}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
