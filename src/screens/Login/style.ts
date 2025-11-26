import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Background = styled(LinearGradient).attrs({
  colors: ['#1E90FF', '#FFFFFF', '#1E90FF'],
})`
  flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    margin-top: 60px;
    padding-top: 20%;
    align-items: center;
`;

export const IconeImage = styled.Image`
    width: 220px;
    height: 150px;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const TitleName = styled.Text`
    font-size: 70px;
    font-weight: bold;
    color: ${({ theme }: any) => theme.colors.white};
    margin-bottom: 30px;
`;

export const TitlePage = styled.Text`
    font-size: 30px;
    font-weight: 900;
    color: #4a4949ff;
    margin-bottom: 32px;
`;

export const Card = styled.View`
    width: 100%;
`;

export const CardInput = styled.View`
    width: 100%;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    border-bottom: 3px;
    border-color: #1E90FF;
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 12px;
    font-size: 20px;
`;

export const ButtonRegister = styled.TouchableOpacity`
    background-color: ${({ theme }: any) => theme.colors.secondary};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    margin-top: 12px;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }: any) => theme.colors.white};
    font-size: 25px;
    font-weight: bold;
`;

export const LinkContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const LinkText = styled.Text`
    color: ${({theme}: any) => theme.colors.white};
    font-size: 20px;
    margin-bottom: 12px;
`;
