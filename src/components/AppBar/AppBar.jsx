import {  useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu";
import { selectIsLoggedIn } from "store/selectors";
import { Header, Nav, Link, LinkWrapper } from "./AppBar.styled";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
       
        <Header>
         <Nav>
         <Link to="/">Home</Link>
            {isLoggedIn ? ( <LinkWrapper>
                <Link to="/contacts">Contacts</Link>
                <UserMenu/>
            </LinkWrapper> )
            : (<LinkWrapper>
                
                <Link to="/register">Sign up</Link>
                <Link to="/login">Sign in</Link>
                </LinkWrapper>)}  
         </Nav>
        </Header>          
        
    )
}