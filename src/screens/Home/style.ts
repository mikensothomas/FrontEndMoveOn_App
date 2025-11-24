import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f5f6ff;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 0.7;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(122, 135, 248, 0.35);
  z-index: 1;
`;

export const ImageContainer = styled.Image`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  z-index: 5;

  elevation: 10;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 10px;
  shadow-offset: 0px 4px;
`;

export const ButtonAndText = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 20px;

  elevation: 10;

  shadow-color: #0f0202ff;
  shadow-opacity: 0.15;
  shadow-radius: 15px;
  shadow-offset: 0px -2px;
`;

export const TextBody = styled.Text`
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  color: #333;
  margin-top: 40px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonTravel = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.colors.secondary};
  padding: 18px;
  width: 80%;
  border-radius: 12px;
  align-items: center;

  elevation: 50;

  shadow-color: #000;
  shadow-opacity: 8;
  shadow-radius: 8px;
  shadow-offset: 2px 8px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
`;