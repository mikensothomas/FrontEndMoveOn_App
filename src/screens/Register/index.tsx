import { StatusBar } from 'expo-status-bar';
import { RegisterScreenProp } from "../../types";
import { ButtonLogin, ButtonRegister, ButtonText, ButtonTextLogin, Card, CardInput, Container, Input, TitleName, TitlePage } from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation<RegisterScreenProp>();
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" style="light" />
            <TitleName>MoveOn</TitleName>
            <TitlePage>Cadastro de Usuários</TitlePage>
            <Card>
                <CardInput>
                    <Input placeholder="Nome completo: (João Da Silva)" />
                    <Input
                        placeholder="CPF: (111.111.111-11)"
                        keyboardType="phone-pad"
                    />
                    <Input
                        placeholder="Email: (felipedasilva@gmail.com)"
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Telefone: (11) 99999-9999"
                        keyboardType="phone-pad"

                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <Input
                        placeholder="Repetir a senha"
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
    )
}