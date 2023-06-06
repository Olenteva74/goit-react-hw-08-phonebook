import { LoginForm } from "components/LoginForm";
import { PageContainer, PageTitle } from "./Pages.styled";

const LoginPage = () => {
    return (
        <PageContainer>
            <PageTitle>Sign in</PageTitle>
            <LoginForm/>
        </PageContainer>
    );
}
export default LoginPage;