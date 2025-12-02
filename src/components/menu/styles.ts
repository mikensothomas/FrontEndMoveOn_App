import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
    flex: 1;
    background-color: #ffff;
    height: 100%;
    min-width: 50%;
    max-width: 70%;
    border-top-right-radius: 20px;
`
export const ContainerCard = styled.View`
    flex: 1;
    gap: 10px;
`
export const User = styled.View`
    flex-direction: row;
    gap: 10px;
    padding-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #cfc9c9ff;
`
export const IconWrapper = styled.View`
  justify-content: center;
`;

export const UserPicture = styled(Ionicons).attrs({
  size: 60,
  color: "#1E90FF",
})``;

export const EmailAndName = styled.View`
    gap: 10;
    padding-top: 12px;
`
export const Trip = styled.View`
    gap: 20px;
    padding-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #cfc9c9ff;
`

export const TextTrip =styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #676464ff;
    padding-left: 20px;
`
    
export const ToGoOut = styled.View`
    flex-direction: row;
    gap: 20px;
    padding-top: 10px;
    padding-left: 20px;
`
export const NewTrip = styled.TouchableOpacity`
    flex-direction: row;
    gap: 20px;
`
export const NewTripIcone = styled(Ionicons).attrs({
    size: 40,
})`
    color: #1E90FF;
    font-size: 30px;
`
export const NewTripText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const OtherPeson = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const OtherPersonText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const PesonIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`

export const TripHistoryIconeText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const TripHistory = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const DataIconeText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const TripHistoryIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`

export const ResetPasswordIconeText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const Settings = styled.View`
    gap: 20px;
    padding-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #cfc9c9ff;
`
export const SettingsIconeText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`

export const IconeToGoOutText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const TextSettings = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #676464ff;
    padding-left: 20px;
`
export const Data = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 15px 10px;
`;

export const DataIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const ResetPassword = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const ResetPasswordIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const Configuracoes = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const SettingsIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const TripCard = styled.View`
    gap: 10px;
    padding-left: 20px;
`
export const SettingsCard = styled.View`
    gap: 10px;
    padding-left: 20px;
`
export const IconeToGoOut = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const Register = styled.View`
    gap: 20px;
    padding-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #cfc9c9ff;
`
export const TextRegister = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #676464ff;
    padding-left: 20px;
`
export const IconeAndTextUserRegister = styled.TouchableOpacity`
    flex-direction: row;
    gap: 20px;
`
export const IconeAndeTextMortocyclistRegister = styled.TouchableOpacity`
    flex-direction: row;
    gap: 20px;
`
export const LoginAndTextUser = styled.TouchableOpacity`
    flex-direction: row;
    gap: 20px;
`
export const LoginAndTextMotorcyclist = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const IconeAndeText = styled.View`
    gap: 10px;
    padding-left: 20px;
`
export const UserText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const UserIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const MotorcyclistText = styled.Text`
    font-size: 15px;
    font-weight: 500;
    gap: 20px;
`
export const MotorcyclistIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const LoginUserText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const LoginUserIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
export const LoginMotorcyclistText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`
export const LoginMotorcyclistIcone = styled(Ionicons)`
    color: #1E90FF;
    font-size: 30px;
`
// 62238F