import { SafeAreaView } from "react-native-safe-area-context"
import {
    Container,
    ContainerCard,
    ToGoOut,
    Trip,
    Settings,
    User,
    EmailAndName,
    NewTrip,
    NewTripIcone,
    OtherPeson,
    PesonIcone,
    TripHistory,
    TripHistoryIcone,
    Data,
    DataIcone,
    ResetPassword,
    ResetPasswordIcone,
    Configuracoes,
    SettingsIcone,
    TripCard,
    SettingsCard,
    IconeToGoOut,
    TextTrip,
    TextSettings,
    NewTripText,
    OtherPersonText,
    TripHistoryIconeText,
    DataIconeText,
    ResetPasswordIconeText,
    SettingsIconeText,
    IconeToGoOutText,
    UserPicture,
    IconWrapper
} from "./styles"
import { Text, StatusBar } from "react-native"

export const MenuContainer = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <Container>
                <ContainerCard>
                    <User>
                        <IconWrapper>
                            <UserPicture name="person-circle" />
                        </IconWrapper>
                        <EmailAndName>
                            <Text>Mikenson Thomas</Text>
                            <Text>mikensonthomas2@gmail.com</Text>
                        </EmailAndName>
                    </User>
                    <Trip>
                        <TextTrip>Viagem</TextTrip>
                        <TripCard>
                            <NewTrip>
                                <NewTripIcone name="car-outline" />
                                <NewTripText>Nova Viagem</NewTripText>
                            </NewTrip>
                            <OtherPeson>
                                <PesonIcone name="people-outline" />
                                <OtherPersonText>Para outra Pessoa</OtherPersonText>
                            </OtherPeson>
                            <TripHistory>
                                <TripHistoryIcone name="time-outline" />
                                <TripHistoryIconeText>Histórico</TripHistoryIconeText>
                            </TripHistory>
                        </TripCard>
                    </Trip>
                    <Settings>
                        <TextSettings>Configurações</TextSettings>
                        <SettingsCard>
                            <Data>
                                <DataIcone name="settings-outline" />
                                <DataIconeText>Meus Daods</DataIconeText>
                            </Data>
                            <ResetPassword>
                                <ResetPasswordIcone name="key-outline" />
                                <ResetPasswordIconeText>Redefinir Senha</ResetPasswordIconeText>
                            </ResetPassword>
                            <Configuracoes>
                                <SettingsIcone name="settings-outline" />
                                <SettingsIconeText>Configurações</SettingsIconeText>
                            </Configuracoes>
                        </SettingsCard>
                    </Settings>
                    <ToGoOut>
                        <IconeToGoOut name="log-out-outline" />
                        <IconeToGoOutText>Sair</IconeToGoOutText>
                    </ToGoOut>
                </ContainerCard>
            </Container>
        </SafeAreaView>
    )
}