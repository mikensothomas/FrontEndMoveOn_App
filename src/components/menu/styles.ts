import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
    flex: 1;
    background-color: #ffff;
    height: 100%;
    min-width: 50%;
    max-width: 60%;
    padding-top: 29px;
`
export const ContainerCard = styled.View`
    flex: 1;
    gap: 80px;
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
  color: "#62238F",
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
    padding-top: 25px;
    padding-left: 20px;
`
export const NewTrip = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const NewTripIcone = styled(Ionicons)`
    color: #62238F;
    font-size: 30px;
    size: 40;
`
export const NewTripText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const OtherPeson = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const OtherPersonText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const PesonIcone = styled(Ionicons)`
    color: #62238F;
    font-size: 30px;
`

export const TripHistoryIconeText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const TripHistory = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const DataIconeText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const TripHistoryIcone = styled(Ionicons)`
    color: #62238F;
    font-size: 30px;
`

export const ResetPasswordIconeText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const Settings = styled.View`
    gap: 20px;
    padding-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #cfc9c9ff;
`
export const SettingsIconeText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`

export const IconeToGoOutText = styled.Text`
    font-size: 15px;
    font-weight: 900;
`
export const TextSettings = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #676464ff;
    padding-left: 20px;
`
export const Data = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const DataIcone = styled(Ionicons)`
    color: #62238F;
    font-size: 30px;
`
export const ResetPassword = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const ResetPasswordIcone = styled(Ionicons)`
    color: #62238F;
    font-size: 30px;
`
export const Configuracoes = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const SettingsIcone = styled(Ionicons)`
    color: #62238F;
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
    color: #62238F;
    font-size: 30px;
`