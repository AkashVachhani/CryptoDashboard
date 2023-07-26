import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import CurrencyDropDown from "../../components/dropdowns/CurrencyDropDown";
import CryptoCurrencyDropDown from "../../components/dropdowns/CryptoCurrencyDropDown";
import Searchbar from "../../components/searchbar/Searchbar";
import TimeButton from "../../components/timeButtons/TimeButton";
import ChartTypeDropDown from "../../components/dropdowns/ChartTypeDropDown";
import LineChart from "../../components/charts/LineChart";
import Sidebar from "../../components/sidebar/Sidebar";
import PieChart from "../../components/charts/PieChart";
import ExchangeRates from "../../components/exchangeRates/ExchangeRates";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import VerticalBarChart from "../../components/charts/VerticalBarChart";
import {
  Container,
  Wrapper,
  Left,
  Top,
  Middle,
  ChartBottom,
  ChartTop,
  Bottom,
  Right,
} from "./Home.styles";

const Home = () => {
  const chartType = useSelector((state) => state.selectChartType.selectedChartType);

  const renderChart = () => {
    if (chartType === "verticalBarChart") {
      return <VerticalBarChart />;
    } else if (chartType === "horizontalBarChart") {
      return <HorizontalBarChart />;
    } else {
      return <LineChart />;
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Left>
          <Top>
            <CurrencyDropDown />
            <Searchbar />
          </Top>
          <Middle>
            <ChartTop>
              <TimeButton />
              <CryptoCurrencyDropDown />
              <ChartTypeDropDown />
            </ChartTop>
            <ChartBottom>{renderChart()}</ChartBottom>
          </Middle>
          <Bottom>
            <PieChart />
            <ExchangeRates />
          </Bottom>
        </Left>
        <Right>
          <Sidebar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
