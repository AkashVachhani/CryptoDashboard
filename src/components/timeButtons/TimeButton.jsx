import React from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timeSlice";
import { Container, Button } from "./TimeButton.styles";

const timeOptions = [
  { value: "1", label: "1d" },
  { value: "7", label: "7d" },
  { value: "14", label: "2w" },
  { value: "30", label: "1m" },
  { value: "180", label: "6m" },
  { value: "365", label: "1y" },
];

const TimeButton = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setTime(e.target.value));
  };

  return (
    <Container>
      {timeOptions.map((option) => (
        <Button
          key={option.value}
          data-testid={`button${option.value}`}
          value={option.value}
          onClick={handleClick}
        >
          {option.label}
        </Button>
      ))}
    </Container>
  );
};

export default TimeButton;
