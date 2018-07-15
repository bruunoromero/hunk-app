import React from "react";
import { StyleProvider } from "native-base";

import getTheme from "../native-base-theme/components";

import Screens from "./screens";

export default () => (
  <StyleProvider style={getTheme()}>
    <Screens />
  </StyleProvider>
);
