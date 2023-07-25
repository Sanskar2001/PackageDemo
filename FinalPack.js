import { useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import DragAndDropList from "./DragAndDropList";
import DropBox from "./DropBox";
import { initialState, reducer, StateProvider } from "./State";
export default FinalPack = (props) => {
  const [dropBoxEndPoint, setDropBoxEndPoint] = useState(0);

  const safeListItemStyle =
    props.listItemStyle === undefined
      ? styles.defaultListItem
      : {
          ...props.listItemStyle,
          justifyContent: "center",
          minHeight: 60,
          marginTop: 10,
          zIndex: 100,
        };

  return (
    <View
      style={{
        flexDirection: "row",
        width: props.containerWidth,
        marginStart: "20%",
        marginTop: "20%",
      }}
    >
      <StateProvider
        value={initialState}
        initialState={initialState}
        reducer={reducer}
      >
        <DragAndDropList
          data={props.data}
          onDrop={props.onDrop}
          listItemStyle={safeListItemStyle}
        />

        <DropBox dropBoxStyle={props.dropBoxStyle} title="Hello" />
      </StateProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultListItem: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginTop: 10,
    zIndex: 100,
  },
});
