import { Animation } from 'components/Animation';
import { WelcomeWrapper, TextWrapper, Text, Title, LinkStyled, LinkWrapper } from './Welcome.styled';

export const Welcome = () => {
    return (
        <WelcomeWrapper>
            <TextWrapper>
            <Text>Welcom to</Text>
            <Title>phonebooks</Title>
            <LinkWrapper>
            
            <LinkStyled to={"/register"}>Sign up</LinkStyled>
            <span>or</span>

            <LinkStyled to={"/login"}>Sign in</LinkStyled>
            </LinkWrapper>
            <Animation/>
            </TextWrapper>
        </WelcomeWrapper>
    )
}