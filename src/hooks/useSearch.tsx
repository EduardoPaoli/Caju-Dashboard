import { createContext, useState, useContext } from "react";
import { SearchContextType } from "~/Interface/SearchContext";

const SearchContext = createContext<SearchContextType>({
  searchValue: "",
  setSearchValue: () => {},
});

interface Props {
  children: React.ReactNode
}

export const SearchProvider = ({ children }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
