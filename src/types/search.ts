import { Product } from "./product";

export interface SearchResults {
    [key: string]: unknown;
    products?: Product
};

