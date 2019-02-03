/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { AppRegistry, View } from "react-native";
import Game from "./src/Game.js";

const App = () => (
  <View style={{ flex: 1 }}>
    <Game />
  </View>
);

AppRegistry.registerComponent("tictactoe", () => App);
