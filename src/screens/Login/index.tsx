import { useNavigation } from "@react-navigation/native";
import { Background, ButtonRegister, ButtonText, Card, CardInput, Container, IconeImage, Input, LinkContainer, LinkText, TitleName, TitlePage } from "./style";
import { LoginScreenProp } from "../../types";
import { StatusBar } from "expo-status-bar";

export default function Login() {
    const navigation = useNavigation<LoginScreenProp>();

    return (
        <Background>
            <Container>
                <StatusBar />
                <IconeImage source={require('../../../assets/icon.png')} />
                <TitleName>MoveOn</TitleName>
                <TitlePage>Página de Login</TitlePage>
                <Card>
                    <CardInput>
                        <Input
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry={true}
                        />
                    </CardInput>
                    <ButtonRegister>
                        <ButtonText>Registrar</ButtonText>
                    </ButtonRegister>
                    <LinkContainer>
                        <LinkText onPress={() => navigation.navigate("Register")}>Cadastrar conta</LinkText>
                        <LinkText>Esquecer a senha</LinkText>
                    </LinkContainer>

                </Card>
            </Container>
        </Background>
    )
}