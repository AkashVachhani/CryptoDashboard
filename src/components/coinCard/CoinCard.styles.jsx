import styled from "styled-components";

const clamp = (min, value, max) => `clamp(${min}, ${value}, ${max})`;

const StyledText = styled.p`
  font-weight: 800;
  font-size: ${(props) => clamp("0.7rem", `0.4rem + 0.5vw`, "0.8rem")};
  color: ${(props) => props.color || "inherit"};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d9d9d9;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 8;
  padding: 5%;
`;

export const CoinName = styled(StyledText)`
  font-size: ${clamp("1rem", `0.5rem + 0.5vw`, "1rem")};
`;

export const MKTCap = styled(StyledText)`
  color: gray;
`;

export const PriceChangePercent = styled(StyledText)`
  flex: 2;
  color: ${(props) => (props.value < 0 ? "red" : "green")};
`;

export const Icon = styled.span``;

export const Img = styled.img`
  width: ${clamp("1.2em", `0.8rem + 0.5vw`, "2rem")};
  height: ${clamp("1.2rem", `0.8rem + 0.5vw`, "2rem")};
  float: left;
  shape-outside: circle(50%);
  margin-right: 2%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
