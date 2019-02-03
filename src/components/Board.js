import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

const Board = ({ onUserSelect, renderIcon }) => {
  return (
    <View
      style={{ width: "90%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => onUserSelect(0, 0)}
          style={styles.tile}
        >
          {renderIcon(0, 0)}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onUserSelect(0, 1)}
          style={styles.tile}
        >
          {renderIcon(0, 1)}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onUserSelect(0, 2)}
          style={styles.tile}
        >
          {renderIcon(0, 2)}
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => onUserSelect(1, 0)}
          style={styles.tile}
        >
          {renderIcon(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUserSelect(1, 1)}
          style={styles.tile}
        >
          {renderIcon(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUserSelect(1, 2)}
          style={styles.tile}
        >
          {renderIcon(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => onUserSelect(2, 0)}
          style={styles.tile}
        >
          {renderIcon(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUserSelect(2, 1)}
          style={styles.tile}
        >
          {renderIcon(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUserSelect(2, 2)}
          style={styles.tile}
        >
          {renderIcon(2, 2)}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  tile: {
    width: "100%",
    flex: 1,
    height: 100,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    backgroundColor: "#7ECA61"
  }
};

export default Board;
