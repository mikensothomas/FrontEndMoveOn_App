import styled from "styled-components/native";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  background-color: #1E90FF;
`;
export const MenuAndNotifications = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`
export const Menu = styled(Ionicons)`
  font-size: 30px;
  color: #fff;
`
export const NotificationsIcone = styled(Ionicons)`
  font-size: 30px;
  color: #fff;
`

export const StyledMap = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BoxInputs = styled.View`
  position: absolute;
  top: 60px;
  width: 90%;
  align-self: center;
  z-index: 10;
`;

export const InputAtual = styled.TextInput`
  background-color: #eaeaea;
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const InputDestino = styled.TextInput`
  background-color: #fff;
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
  background-color: #1E90FF;
  padding: 15px;
  width: 90%;
  align-self: center;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonConfirmarText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
