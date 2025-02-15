import { useRef, useState } from "react";
import Input from "./common/Input";
import NotFoundData from "./NotFound";
import ListItem from "./ListItem";
import useDebouceSearch from "../hooks/useDebouceSearch";
import { searchProductsApi } from "../api/products";
import { SearchResults } from "../types/search";
import { Product } from "../types/product";



const AutoCompleteSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listRef = useRef(null);

  const searchResults = useDebouceSearch<SearchResults>({
    searchValue,
    fetchApi: searchProductsApi,
    delay: 400,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setSearchValue(results[selectedIndex].title);
    }
  };

  
  const results: Product[] = Array.isArray(searchResults?.products) ? searchResults?.products : [];

  const handleSearchClick = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <h1>AutoComplete Search</h1>
        <Input
          type="text"
          className="w-full ml-2 bg-transparent outline-none"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search products..."
          onKeyDown={handleKeyDown}
        />
    
      
        {searchValue !== "" && (
          <ul ref={listRef} className=" w-full mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-md overflow-hidden">
            {results.length == 0 ? (
              <NotFoundData>
                <h1>No Data Found</h1>
              </NotFoundData>
            ) : (
              results.map((product: Product, index: number) => {
                return (
                  <ListItem
                    key={product?.id}
                    className="cursor-pointer hover:bg-amber-300"
                    data={product}
                    selectedIndex={selectedIndex}
                    index={index}
                    handleSearchClick={handleSearchClick}
                  />
                );
              })
            )}
          </ul>
        )}
    
    </>
  );
};

export default AutoCompleteSearch;
