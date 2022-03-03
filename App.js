import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import TmpScreen from "./src/screens/TmpScreen";
import Loader from "./src/screens/Loader";
import { Provider as IotProvider } from "./src/context/IotContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Temp: TmpScreen,
    Loader: Loader,
  },
  {
    initialRouteName: "Loader",
    defaultNavigationOptions: {
      title: "Dashboard",
    },
  }
);

const App = createAppContainer(navigator);

// export default createAppContainer(navigator);

export default () => {
  return (
    <IotProvider>
      <App />
    </IotProvider>
  );
};
