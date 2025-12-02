import { StatusBar } from 'expo-status-bar';
import { RegisterScreenProp } from "../../types";
import * as ImagePicker from "expo-image-picker";
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
    ImageCNH,
    Input,
    InputImageCNH,
    TextCNH,
    TitleName,
    TitlePage
} from "./style";
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function RegisterMotorcyclist() {
    const navigation = useNavigation<RegisterScreenProp>();
    const [sexo, setSexo] = useState("");
    const [image, setImage] = useState<string | null>(null)

    async function pickImage() {
        const permission = await ImagePicker.requestCameraPermissionsAsync()
        if (!permission.granted) return

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <Background>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container>
                    <StatusBar />

                    <IconPessone name="user-circle" />
                    <TitleName>MoveOn</TitleName>
                    <TitlePage>Cadastro de Motorista</TitlePage>

                    <Card>
                        <CardInput>

                            <Input placeholder="Nome completo" />

                            <Celect>
                                <Picker
                                    selectedValue={sexo}
                                    onValueChange={(v) => setSexo(v)}
                                >
                                    <Picker.Item label="Informe teu Sexo" value="" />
                                    <Picker.Item label="Masculino" value="masculino" />
                                    <Picker.Item label="Feminino" value="feminino" />
                                </Picker>
                            </Celect>

                            <Input placeholder="Email" keyboardType="email-address" />
                            <Input placeholder="Telefone" keyboardType="phone-pad" />

                            <Input placeholder="CPF" keyboardType="numeric" />
                            <Input placeholder="Senha" secureTextEntry={true} />

                            <Input placeholder="Número da CNH" keyboardType="numeric" />
                            <Input placeholder="Categoria da CNH (B, C, D)" />
                            <Input placeholder="Validade da CNH (DD/MM/AAAA)" />
                            <InputImageCNH onPress={pickImage}>
                                <TextCNH >
                                    {image ? "CNH selecionada ✔" : "Envie foto da CNH"}
                                </TextCNH>
                            </InputImageCNH>

                            {image && (
                                <ImageCNH
                                    source={{ uri: image }}
                                />
                            )}
                            <Input placeholder="Placa do veículo" autoCapitalize="characters" />
                            <Input placeholder="Marca do veículo" />
                            <Input placeholder="Modelo do veículo" />
                            <Input placeholder="Ano do veículo" keyboardType="numeric" />
                            <Input placeholder="Cor do veículo" />
                            <Input placeholder="Renavam" keyboardType="numeric" />

                            <Input placeholder="Banco" />
                            <Input placeholder="Número da conta" keyboardType="numeric" />
                            <Input placeholder="Tipo de conta (corrente/poupança)" />
                            <Input placeholder="Agência" keyboardType="numeric" />
                        </CardInput>

                        <ButtonRegister>
                            <ButtonText>Registrar</ButtonText>
                        </ButtonRegister>

                        <ButtonLogin onPress={() => navigation.navigate("Login")}>
                            <ButtonTextLogin>Já tenho conta</ButtonTextLogin>
                        </ButtonLogin>
                    </Card>

                </Container>
            </ScrollView>
        </Background>
    );
}