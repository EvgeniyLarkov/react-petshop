import axios from "axios";
import { routes } from "./routes";

export const fetchData = async (url) => {
  const items = await axios.get(`${routes.domain}/data?${url}`);
  return items.data;
};
