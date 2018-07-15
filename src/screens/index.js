import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./home/home";
import List from "./list/list";

export default createStackNavigator({
  Tabs: createBottomTabNavigator({
    Home
  }),
  List
});
