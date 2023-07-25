import React from "react";
import { renderHook,render,fireEvent} from "@testing-library/react-native";
import DropBox from "../DropBox";
import { StateProvider, initialState,useStateValue, reducer } from "../State";

test("DropBox should dispatch actions on layout event", () => {
  const { getByTestId } = render(
    <StateProvider reducer={reducer} initialState={initialState}>
      <DropBox title="Test Title" dropBoxStyle={{ width: 100, height: 100 }} />
    </StateProvider>
  );

  const dropBoxView = getByTestId("drop-box-view");
  dropBoxView.measure = jest.fn((callback) =>
    callback(10, 20, 100, 100, 200, 300)
  );

  // Simulate the onLayout event
  dropBoxView.props.onLayout();


//   expect(state.dropBoxEndPoint).toBe(200);
  
//   dropBoxStartPoint: 0,
//   dropBoxEndPoint: 0,
//   containerStartPoint: 0,
//   dropBoxVerticalStartPoint: 0,
//   dropBoxVerticalEndPoint: 0,

  // Now, you can check if the actions were dispatched correctly
  // For example, if your StateProvider returns an array with state and dispatch:
  // const [state, dispatch] = result.current;
  // You can check the updated state after dispatching the actions and assert on it.
});






  
  
 
