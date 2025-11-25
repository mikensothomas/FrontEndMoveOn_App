import { BackgroundImage, ButtonAndText, ButtonContainer, ButtonText, ButtonTravel, Container, ImageContainer, Overlay, TextBody } from "./style"
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProp } from "../../types";

export const Home = () => {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <Container>
            <BackgroundImage source={require('../../../assets/imageScren.png')}>
                <Overlay />
                <ImageContainer source={require('../../../assets/image.png')}/>
            </BackgroundImage>
            <ButtonAndText>
                <TextBody>Para onde você quer ir? É só clicar no Butão em baixo.</TextBody>
                <ButtonContainer>
                    <ButtonTravel>
                        <ButtonText onPress={() => navigation.navigate("Login")}>Viajar</ButtonText>
                    </ButtonTravel>
                </ButtonContainer>
            </ButtonAndText>
        </Container>
    )
}