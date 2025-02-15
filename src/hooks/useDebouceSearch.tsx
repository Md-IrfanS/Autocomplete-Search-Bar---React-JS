import { useCallback, useEffect, useState } from "react";
import { FetchApi } from "../types/api";

interface useDebouceSearchProps<T> {
    searchValue: string
    fetchApi: FetchApi<T>;
    delay?: number
}

const useDebouceSearch = <T,>({searchValue, fetchApi, delay = 400} : useDebouceSearchProps<T>) => {
    const [searchResults, setSearchResults] = useState<T | null>(null);
    const [cacheResults, setCacheResults] = useState<Record<string, T>>({});

    const fetchData = useCallback(async () => {
        try{
            if (!searchValue) {
                setSearchResults(null);
                return 
            }
            const lowerCaseQuery = searchValue.toLowerCase();
            if (cacheResults[lowerCaseQuery]) {                
                setSearchResults(cacheResults[lowerCaseQuery]);
                return
            }

            const data = await fetchApi(searchValue);
            setSearchResults(data);
            setCacheResults(prev=> ({...prev, [lowerCaseQuery]: data}));
        }catch(error){
            console.error('Error fetching data:', error)
        }
    }, [searchValue, fetchApi]);

    useEffect(()=> {
        const timer = setTimeout(fetchData, delay);

        return () => clearTimeout(timer);
    },[fetchData, delay]);
    
    return searchResults
};

export default useDebouceSearch