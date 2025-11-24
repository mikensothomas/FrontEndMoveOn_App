import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.Image`
    
`

export const ButtonAndText = styled.View`
  flex: 1;
  background-color: rgba(250, 245, 245, 0.7);
`;

export const TextBody = styled.Text`
    font-size: 50px;
    text-align: center;
    padding-top: 30px;
    font-weight: 900;
`

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonTravel = styled.TouchableOpacity`
    background-color: ${({ theme }: any) => theme.colors.secondary};
    padding: 15px;
    width: 350px;
    border-radius: 5px;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: 30px;
    font-weight: 900;
`