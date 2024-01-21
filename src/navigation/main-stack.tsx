import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/login";
import { RegisterScreen } from "../screens/register";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const MainStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};
