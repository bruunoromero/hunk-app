import React from "react";
import { StyleProvider } from "native-base";

import Navigation from "./utils/navigation";
import getTheme from "../native-base-theme/components";

import Screens from "./screens";

export default () => (
  <StyleProvider style={getTheme()}>
    <Screens
      ref={navigationRef => Navigation.setTopLevelNavigator(navigationRef)}
    />
  </StyleProvider>
);
