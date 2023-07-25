import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Draggable from "../Draggable";

// Mock useStateValue hook
jest.mock("../State", () => ({
  __esModule: true,
  useStateValue: jest.fn(() => [{ dropBoxStartPoint: 0, containerStartPoint: 0, dropBoxEndPoint: 200, dropBoxVerticalStartPoint: 0, dropBoxVerticalEndPoint: 100 }, jest.fn()])
}));

test("Draggable component should move and drop correctly", () => {
  const onDropMock = jest.fn();
  const item = { value: "Item 1" };
  const listItemStyle = { width: 100, height: 50, backgroundColor: "blue" };

  const { getByText, getByTestId } = render(
    <Draggable
      item={item}
      listItemStyle={listItemStyle}
      dropBoxEndPoint={200} // Use any appropriate value for testing
      onDrop={onDropMock}
    />
  );

  const draggableBox = getByTestId("draggable-box");

  // Move the draggable box (simulate pan gesture)
  fireEvent(draggableBox, "panResponderMove", {
    nativeEvent: {
      touches: [{ pageX: 100, pageY: 50 }],
    },
  });

  // Perform the drop (simulate pan responder release)
  fireEvent(draggableBox, "panResponderRelease", {
    nativeEvent: {
      pageX: 150, // Adjust this value based on your conditions in the component
      pageY: 75,  // Adjust this value based on your conditions in the component
    },
  });

 
});





