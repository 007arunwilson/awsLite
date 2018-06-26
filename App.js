import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens/index";

registerScreens();

export default Navigation.startSingleScreenApp({
  screen: {
    screen: "awsLiteApp.launchScreen", // unique ID registered with Navigation.registerScreen
    navigatorStyle: {
      navBarHidden: true,
      statusBarHidden: true
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  animationType: "fade"
});
