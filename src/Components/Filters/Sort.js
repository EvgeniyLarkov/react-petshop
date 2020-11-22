import React from "react";
import useStyles from "../../styles/components/Filters";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Sort = ({ currentSort, changeSort, sortTypes }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
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
  );
};

export default Sort;
