import React from "react";
import useStyles from "../../styles/components/Filters";
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";
import Multiselect from "./Multiselect";
import Priceslider from "./Priceslider";
import Sort from "./Sort";

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
        <Priceslider
          minPrice={minPrice}
          maxPrice={maxPrice}
          changePriceRange={changePriceRange}
        />
        {filterTypes.allIds.map((id) => (
          <Multiselect
            id={id}
            key={id}
            label={filterTypes.Ids[id].name}
            data={filterTypes.Ids[id].data}
            values={filters[id]}
            handler={changeFilterValue}
          />
        ))}
      </div>
      <Sort
        currentSort={currentSort}
        changeSort={changeSort}
        sortTypes={sortTypes}
      />
    </div>
  );
}
