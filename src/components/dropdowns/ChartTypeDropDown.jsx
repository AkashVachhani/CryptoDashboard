import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setChartType } from "../../features/chartTypeSlice";

const Container = styled.div`
  height: 10vh;
  width: 25%;
  margin: 1%;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
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

const chartTypeOptions = [
  { value: "lineChart", label: "Line Chart" },
  { value: "horizontalBarChart", label: "Horizontal Bar Chart" },
  { value: "verticalBarChart", label: "Vertical Bar Chart" },
];

const ChartTypeDropDown = () => {
  const dispatch = useDispatch();
  const selectedChartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );

  const handleChange = (e) => {
    dispatch(setChartType(e.target.value));
  };

  return (
    <Container>
      <Select value={selectedChartType} onChange={handleChange}>
        <Option value="chartType" disabled>
          Chart Type
        </Option>
        {chartTypeOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default ChartTypeDropDown;
