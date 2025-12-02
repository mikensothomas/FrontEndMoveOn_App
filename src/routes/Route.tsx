import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { RootStackParamList } from "../types";
import { Home } from "../screens/Home";
import RegisterMotorcyclist from "../screens/RegisterMotorcyclist";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="RegisterMotorcyclist"
          component={RegisterMotorcyclist}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}