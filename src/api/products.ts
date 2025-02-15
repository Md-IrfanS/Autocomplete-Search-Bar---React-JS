import { API_SEARCH_PRODUCTS } from "../constants/api";
import { FetchApi } from "../types/api";
import { SearchResults } from "../types/search";

export const searchProductsApi: FetchApi<SearchResults> = async (query) => {
    const response = await fetch(`${API_SEARCH_PRODUCTS}?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };