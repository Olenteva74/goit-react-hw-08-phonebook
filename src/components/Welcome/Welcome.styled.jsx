import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WelcomeWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const TextWrapper = styled.div`
`;

export const Text = styled.p`
font-size: 20px;
line-height: 1.5;
font-weight; 500;
ccolor: inherit;
`;

export const Title = styled.h1`
font-size: 60px;
line-height: 1.5;
text-transform: uppercase; 
color: inherit;
@media screen and (min-width: 768px) {
    font-size: 100px; 
}
`;

export const LinkWrapper = styled.div`
display: flex;
gap: 50px;
align-items: baseline;
justify-content: flex-end;
`;

export const LinkStyled = styled(Link)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 4px 0;
margin-bottom: 12px;
color:  #373737;
text-decoration: none;
font-weight: 500;
position: relative;
transition: color 250ms linear;
::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 2px;
    border-radius: 2px;
    background-color: #4676D7;
    width: 0%;
    transition: width 250ms linear;
}
:hover::after,
:focus::after {
    color: #4676D7;
    width: 100%;
}
:hover,
:focus {
    color: #4676D7;
}
`;