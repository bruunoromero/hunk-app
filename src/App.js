import React from "react";
import { StyleProvider } from "native-base";
import { createSwitchNavigator } from "react-navigation";
import Navigation from "./utils/navigation";
import getTheme from "../native-base-theme/components";

import List from "./screens/list";

const renderApp = Component => {
  const screen = () => (
    <StyleProvider style={getTheme()}>
      <Component
        ref={navigationRef => Navigation.setTopLevelNavigator(navigationRef)}
      />
    </StyleProvider>
  );

  screen.router = Component.router;
  return screen;
};

export default createSwitchNavigator({ List: renderApp(List) });
