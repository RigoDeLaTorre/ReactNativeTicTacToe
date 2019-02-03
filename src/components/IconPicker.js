import React from "react";
import { View, Picker } from "react-native";
import imgData from "../imgData.js";

const IconPicker = ({ selectedValue, onValueChange }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        backgroundColor: "#CEE9C4",
        borderRadius: 5
      }}
    >
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 40,
          width: 175,
          color: "#1a1b1c"
        }}
        onValueChange={item => onValueChange(item)}
      >
        {imgData.map(item => (
          <Picker.Item label={item.label} value={item.label} key={item.label} />
        ))}
      </Picker>
    </View>
  );
};

export default IconPicker;
