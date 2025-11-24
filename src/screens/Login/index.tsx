import { useNavigation } from "@react-navigation/native";
import { ButtonRegister, ButtonText, Card, CardInput, Container, IconeImage, Input, LinkContainer, LinkText, TitleName, TitlePage } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
    const navigation = useNavigation<LoginScreenProp>();

    return (
        <Container>
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
                        secureTextEntry = {true}
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
    )
}