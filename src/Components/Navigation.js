import { Tabs, Tab } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { changeCategory } from "../redux/actions/filters";

const categories = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Sofas",
    type: "sofa",
  },
  {
    name: "Beds",
    type: "bed",
  },
  {
    name: "Chairs",
    type: "chair",
  },
];

function Navigation() {
  const dispatch = useDispatch();
  const category = useSelector(({ filters }) => filters.activeCategory);

  const handleCategoryChange = (event, value) => {
    dispatch(changeCategory(value));
  };

  return (
    <Tabs
      value={category}
      onChange={handleCategoryChange}
      indicatorColor="secondary"
      textColor="secondary"
      centered
    >
      {categories.map((element, index) => (
        <Tab
          label={element.name}
          value={element.type}
          key={`${element.name}_${index}`}
        />
      ))}
    </Tabs>
  );
}

export default React.memo(Navigation);
