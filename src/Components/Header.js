import { InputAdornment, TextField, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { applySearch } from "../redux/actions/filters";

import useStyles from "../styles/components/Header";

function Header() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = React.useState("");

  const handleApplySearch = (value) => {
    dispatch(applySearch(value));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <Typography className={styles.logo__text}>
            Drag&Drop market
          </Typography>
        </div>
        <div className={styles.search}>
          <TextField
            id="input-search"
            placeholder="search"
            value={searchInput}
            onChange={({ target: { value } }) => setSearchInput(value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleApplySearch(searchInput);
                setSearchInput("");
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
