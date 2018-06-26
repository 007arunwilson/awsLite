import { Navigation } from "react-native-navigation";
import LaunchScreen from "./launchScreen";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("awsLiteApp.launchScreen", () => LaunchScreen);
}
