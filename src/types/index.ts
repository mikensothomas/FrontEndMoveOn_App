import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MenuContainer: undefined
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export type MenuCloseProps = {
    closeMenu: () => void;
};

export type RegisterScreenProp = NativeStackNavigationProp<RootStackParamList, "Register">;
export type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;
export type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;
export type MenuProps = NativeStackNavigationProp<RootStackParamList, "MenuContainer">;