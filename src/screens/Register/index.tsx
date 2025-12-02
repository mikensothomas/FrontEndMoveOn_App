import { StatusBar } from 'expo-status-bar';
import { RegisterScreenProp } from "../../types";
import {
    Background,
    ButtonLogin,
    ButtonRegister,
    ButtonText,
    ButtonTextLogin,
    Card,
    CardInput,
    Celect,
    Container,
    IconPessone,
    Input,
    TitleName,
    TitlePage
} from "./style";
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function Register() {
    const navigation = useNavigation<RegisterScreenProp>();
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <Background>
            <ScrollView showsVerticalScrollIndicator={true}>
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
                        <Celect>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(value) => setSelectedValue(value)}
                            >
                                <Picker.Item label="Informe teu Sexo" value="" style={{fontSize: 20}}/>
                                <Picker.Item label="Masculino" value="masculino" style={{fontSize: 20}}/>
                                <Picker.Item label="Feminino" value="feminino" style={{fontSize: 20}}/>
                                <Picker.Item label="Não identificado" value="naoidentificado" style={{fontSize: 20}}/>
                            </Picker>

                        </Celect>
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
            </ScrollView>
        </Background>
    )
}