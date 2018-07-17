import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./home/home";
import List from "./list/list";
import ListCreate from "./list-create/list-create";

const MainStack = createStackNavigator(
  {
    Tabs: createBottomTabNavigator({
      Home
    }),
    List
  },
  {
    headerMode: "none"
  }
);

export default createStackNavigator(
  {
    Main: MainStack,
    ListCreate
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
