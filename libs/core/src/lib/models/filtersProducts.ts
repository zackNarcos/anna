import {Category} from "@anna/core";
import {SortType} from "../types/sortType";

export interface FiltersProducts {
  name: string;
  category: Category | null;
  price: string;
  size: string[];
  color: string[];
  sort: SortType;
}
