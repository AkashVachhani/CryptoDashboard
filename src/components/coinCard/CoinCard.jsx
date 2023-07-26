import React from "react";
import millify from "millify";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {
  Container,
  Wrapper,
  InfoContainer,
  Info,
  Img,
  CoinName,
  MKTCap,
  PriceChangePercent,
} from "./CoinCard.styles";

const formatPriceChangePercentage = (percentage) => {
  return percentage.toFixed(4);
};

const CoinCard = ({ coin }) => {
  const { price_change_percentage_24h } = coin;
  const Down = price_change_percentage_24h < 0;

  return (
    <Container data-test="coincard-div">
      <Wrapper>
        <InfoContainer>
          <Img src={coin.image} />
          <Info>
            <CoinName>{coin.name}</CoinName>
            <MKTCap>Mkt.Cap ${millify(coin.market_cap)}</MKTCap>
          </Info>
        </InfoContainer>
        {Down ? (
          <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
        ) : (
          <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
        )}
        <PriceChangePercent value={price_change_percentage_24h}>
          {formatPriceChangePercentage(price_change_percentage_24h)}
        </PriceChangePercent>
      </Wrapper>
    </Container>
  );
};

export default CoinCard;
