import { StatusBar } from 'expo-status-bar';
import { RegisterScreenProp } from "../../types";
import { Background, ButtonLogin, ButtonRegister, ButtonText, ButtonTextLogin, Card, CardInput, Container, IconPessone, Input, TitleName, TitlePage } from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation<RegisterScreenProp>();
    return (
        <Background>
            <Container>
                <StatusBar />
                <IconPessone name="user-circle" />
                <TitleName>MoveOn</TitleName>
                <TitlePage>Cadastro de Usuários</TitlePage>
                <Card>
                    <CardInput>
                        <Input
                            keyboardType="text"
                            placeholder="Nome completo" />
                        <Input
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <Input
                            placeholder="Telefone"
                            keyboardType="phone-pad"

                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry={true}
                        />
                    </CardInput>
                    <ButtonRegister>
                        <ButtonText>Registrar</ButtonText>
                    </ButtonRegister>

                    <ButtonLogin>
                        <ButtonTextLogin
                            onPress={() => navigation.navigate("Login")}
                        >
                            Tenho Conta
                        </ButtonTextLogin>
                    </ButtonLogin>

                </Card>
            </Container >
        </Background>
    )
}