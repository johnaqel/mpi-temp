import { useQuery } from "react-query";
import api from "../../api/api";

const fetchItems = api.get("/items").then((res) => res.data);
const {} = useQuery;

export default function useItems() {
  return useQuery("items", () => fetchItems);
}
