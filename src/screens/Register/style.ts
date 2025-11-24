import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.background};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

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
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: transparent;
  padding: 18px;
  border-radius: 5px;
  align-items: center;
  margin-top: 12px;
  border: 1px solid ${({ theme }: any) => theme.colors.secondary};
`;

export const ButtonTextLogin = styled.Text`
  color: ${({ theme }: any) => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;