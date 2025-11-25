import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { RootStackParamList } from "../types";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}