import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/login";
import Preload from "../screens/Preload";
import Register from "../screens/Register";

import MainTab from "./mainTab";

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const mainStack = () => {
  return (
    <>
      <Navigator screenOptions={screenOptions}>
        {/* <Screen name="Preload" component={Preload} /> */}
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </>
  );
};

export default mainStack;
