import axios from "axios";
import { routes } from "./routes";

export const fetchData = async (url) => {
  const items = await axios.get(`${routes.dataPath}?${url}`);
  return items.data;
};
