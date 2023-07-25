import React from "react";
import { render } from "@testing-library/react-native";
import FinalPack from "../FinalPack";

// Mock the StateProvider
// jest.mock("./State", () => ({
//   __esModule: true,
//   StateProvider: ({ children }) => children,
//   initialState: {
//     dropBoxStartPoint: 0,
//     dropBoxEndPoint: 0,
//     containerStartPoint: 0,
//     dropBoxVerticalStartPoint: 0,
//     dropBoxVerticalEndPoint: 0,
//   },
//   reducer: jest.fn(),
// }));
jest.mock("../State", () => {
    const { createContext, useContext, useReducer } = jest.requireActual("react");
    return {
      __esModule: true,
      StateContext: createContext(),
      StateProvider: ({ children }) => children,
      useStateValue: () => useReducer(jest.fn(), {
        dropBoxStartPoint: 0,
        dropBoxEndPoint: 0,
        containerStartPoint: 0,
        dropBoxVerticalStartPoint: 0,
        dropBoxVerticalEndPoint: 0,
      }),
    };
  });

test("FinalPack should render correctly", () => {
  const data = [
    { key: "1", value: "Item 1" },
    { key: "2", value: "Item 2" },
    { key: "3", value: "Item 3" },
  ];
  const onDropMock = jest.fn();
  const listItemStyle = { width: 100, height: 50, backgroundColor: "blue" };
  const dropBoxStyle = { backgroundColor: "red", width: 100, height: 50 };

  const { getByText, getByTestId } = render(
    <FinalPack
      data={data}
      onDrop={onDropMock}
      listItemStyle={listItemStyle}
      dropBoxStyle={dropBoxStyle}
      containerWidth={300}
    />
  );

  // Check if the DragAndDropList component is rendered with the correct data
//   const draggableBoxes = getByTestId("draggable-box");
//   expect(draggableBoxes.length).toBe(data.length);

  // Check if the DropBox component is rendered with the correct title
  const dropBoxTitle = getByText("Hello");
  expect(dropBoxTitle).toBeDefined();

  // You can perform other relevant tests based on your component logic
});