import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";
import {
  Container,
  Input,
  SearchOutPutContainer,
  SearchOutPut,
} from "./Searchbar.styles";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  // Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCurrencySelection = (selectedCurrency) => {
    dispatch(setCryptoCurrency(selectedCurrency));
    setSearchValue("");
  };

  // Filter the coinList based on searchValue
  const filteredCoins = coinList
    ? coinList.filter((coin) =>
        coin.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <Container>
      <Input
        value={searchValue}
        placeholder="Search Crypto Currencies"
        onChange={handleInputChange}
      />
      <SearchOutPutContainer active={searchValue}>
        {filteredCoins.map((coin) => (
          <SearchOutPut
            onClick={() => handleCurrencySelection(coin.name)}
            key={coin.id}
          >
            {coin.name}
          </SearchOutPut>
        ))}
      </SearchOutPutContainer>
    </Container>
  );
};

export default Searchbar;
