import { Dispatch, SetStateAction } from "react";

export interface SearchContextType {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
  }