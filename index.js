import { AppRegistry, YellowBox } from "react-native";
import App from "./App";

/* TODO: Remove this line. React Native will probably fix this in a soon update. */
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("Chatazan", () => App);
