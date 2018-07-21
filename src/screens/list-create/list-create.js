import { createStackNavigator } from "react-navigation";

import Step1 from "./step1";
import Step2 from "./step2";

export default createStackNavigator(
  {
    Step1,
    Step2
  },
  {
    headerMode: "none"
  }
);
