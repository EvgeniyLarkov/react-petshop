import React from "react";
import useStyles from "../../styles/components/Filters";
import { Checkbox, MenuItem, Typography } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";

const Multiselect = ({ id, label, data, handler, values }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.filters}>
      <Typography className={classes.filter__label}>{label}</Typography>
      <FormControl className={classes.filter__input}>
        <Select
          id={id}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={values}
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
              <Checkbox checked={values.indexOf(item) > -1} />
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Multiselect;
