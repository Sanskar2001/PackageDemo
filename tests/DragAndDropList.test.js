import React from "react";
import { render } from "@testing-library/react-native";
import DragAndDropList from "../DragAndDropList";
import { useStateValue } from "../State";

// Mock useStateValue hook
jest.mock("../State", () => ({
  __esModule: true,
  useStateValue: jest.fn(() => [{ dropBoxStartPoint: 0, containerStartPoint: 0, dropBoxEndPoint: 200, dropBoxVerticalStartPoint: 0, dropBoxVerticalEndPoint: 100 }, jest.fn()])
}));

// Mock the ref's measure method
const measureMock = jest.fn((callback) => callback(0, 0, 100, 100, 50, 50));

// Mock the ScrollView's ref
React.useRef = jest.fn(() => ({
    current: {
      measure: measureMock,
    },
  }));

test("DragAndDropList should render correctly with items", () => {
  const data = [
    { key: "1", value: "Item 1" },
    { key: "2", value: "Item 2" },
    { key: "3", value: "Item 3" },
  ];
  const onDropMock = jest.fn();
  const listItemStyle = { width: 100, height: 50, backgroundColor: "blue" };
  const dropBoxEndPoint = 200;

  const { getAllByTestId, getByTestId } = render(
    <DragAndDropList
      data={data}
      onDrop={onDropMock}
      listItemStyle={listItemStyle}
      dropBoxEndPoint={dropBoxEndPoint}
    />
  );

  // Check if the list contains the correct number of items
  const draggableBoxes = getAllByTestId("draggable-box");
  expect(draggableBoxes.length).toBe(data.length);


  const [state,dispatch]=useStateValue()

 
//   expect(measureMock).toHaveBeenCalled();

  // Check if the onLayout handler was called and dispatch was called with the correct value
//   expect(measureMock).toHaveBeenCalled();
//   expect(dispatch).toHaveBeenCalledWith({
//     type: "setContainerStartPoint",
//     payload: 50,
//   });

  // You can perform other relevant tests based on your component logic
});
