import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";

const Container = styled.div`
  height: 10vh;
  width: 25%;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  overflow-y: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  padding: 1%;
  cursor: pointer;
`;

const Option = styled.option`
  font-weight: 400;
`;

const CryptoCurrencyDropDown = () => {
  const selectedCryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );

  const dispatch = useDispatch();

  // Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };

  return (
    <Container>
      <Select onChange={handleChange} value={selectedCryptoCurrency}>
        <Option value="cryptoCurrency" disabled>
          Crypto Currency
        </Option>
        {coinList?.map((coin) => (
          <Option value={coin.id} key={coin.id}>
            {coin.name.toUpperCase()}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default CryptoCurrencyDropDown;
