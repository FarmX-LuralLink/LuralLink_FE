import React, { useState } from "react";
import styled from "styled-components";
import Search from "../assets/search.png";

const ParentContainer=styled.div`
display: flex;
justify-content: center;
`
const SearchBoxContainer = styled.div`
  position: relative;
  padding: 1px;
  border: 1px solid #8a8a8a;
  border-radius: 5px;
  width: 100vw-36px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 29px;
`;
const SearchInput = styled.input`
  border: none;
  padding: 0 40px 0 10px;
  height: 28px;
  width: 300px;
  &:focus {
    outline: none; /* Remove the default focus outline */
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none; /* Remove the default focus outline */
  }
  &:hover {
    background-color: none; /* Remove the default focus outline */
  }

  &img {
    height: 24px;
    width: 24px;
  }
`;
interface SearchResult {
  //result값 형식
}

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/주소넣기={query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data: SearchResult[] = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  return (
    <ParentContainer>
    <SearchBoxContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <img src={Search} alt="search" />
      </SearchButton>
    </SearchBoxContainer>
    </ParentContainer>
  );
};
export default SearchBox;
