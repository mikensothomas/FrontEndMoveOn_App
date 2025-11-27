import styled from "styled-components/native";
import MapView from "react-native-maps";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const StyledMap = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BoxInputs = styled.View`
  position: absolute;
  top: 20px;
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
  background-color: #000;
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
