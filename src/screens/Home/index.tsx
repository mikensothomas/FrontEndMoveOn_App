import { BackgroundImage, ButtonAndText, ButtonContainer, ButtonText, ButtonTravel, Container, ImageContainer, TextBody } from "./style"

export const Home = () => {
    return (
        <Container>
            <BackgroundImage source={require('../../../assets/imageScren.png')}>
                <ImageContainer source={require('../../../assets/image.png')}/>
            </BackgroundImage>
            <ButtonAndText>
                <TextBody>Para onde você quer ir? É só clicar no Butão em baixo</TextBody>
                <ButtonContainer>
                    <ButtonTravel>
                        <ButtonText>Viajar</ButtonText>
                    </ButtonTravel>
                </ButtonContainer>
            </ButtonAndText>
        </Container>
    )
}