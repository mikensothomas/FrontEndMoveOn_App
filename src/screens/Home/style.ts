import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Background = styled(LinearGradient).attrs({
  colors: ['#1E90FF', '#FFFFFF', '#1E90FF'],
})`
  flex: 1;
`;

export const GradientOverlay = styled(LinearGradient).attrs({
  colors: ['#1E90FF', '#FFFFFF', '#1E90FF'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;


export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
`;


export const DarkOverlay = styled(LinearGradient).attrs({
  colors: [
    'rgba(59, 137, 214, 0.45)',
    'rgba(248, 242, 242, 0.55)',
    'rgba(0,0,0,0.7)'
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;

export const ImageWrapper = styled.View`
  z-index: 10;
  padding: 12px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.12);

  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 14px;
  shadow-offset: 0px 6px;
  elevation: 12;
`;


export const StyledImage = styled.Image`
  width: 260px;
  height: 360px;
  border-radius: 26px;
`;

export const ButtonAndText = styled.View`
  flex: 1;
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
  width: 100%;
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