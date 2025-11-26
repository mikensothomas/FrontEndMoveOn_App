import { Background, BackgroundImage, ButtonAndText, ButtonContainer, ButtonText, ButtonTravel, Container, DarkOverlay, GradientOverlay, ImageWrapper, StyledImage, TextBody } from "./style"
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProp } from "../../types";

export const Home = () => {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <Container>
            <Background>
                <BackgroundImage>
                    <GradientOverlay />
                    <DarkOverlay />
                    <ImageWrapper>
                        <StyledImage source={require('../../../assets/image.png')} />
                    </ImageWrapper>
                </BackgroundImage>

                <ButtonAndText>
                    <TextBody>Para onde você quer ir? É só clicar no Butão em baixo.</TextBody>
                    <ButtonContainer>
                        <ButtonTravel onPress={() => navigation.navigate("Login")}>
                            <ButtonText>Viajar</ButtonText>
                        </ButtonTravel>
                    </ButtonContainer>
                </ButtonAndText>
            </Background>
        </Container>
    )
}

