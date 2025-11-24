import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
    padding: 24px;
    padding-top: 20%;
    align-items: center;
`;

export const IconeImage = styled.Image`
    width: 220px;
    height: 150px;
    border-radius: 20px;
    margin-top: 40px;
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
    color: ${({ theme }: any) => theme.colors.white};
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
    border: 4px solid #d1d1d1;
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 12px;
    font-size: 20px;
    background-color: #fff;
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
