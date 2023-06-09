import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getRegistration } from 'store/operations';
import { FormContainer, Input, Button } from './RegisterForm.styled';

const schema = yup.object().shape({
    name: yup.string().trim().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(10).required()
})

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({name, email, password}) => {
      dispatch(getRegistration({name, email, password}));
      
    }
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" {...register("name")}/>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" {...register("email")}/>
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" {...register("password")}/>
            <Button type="submit">Sign up</Button>
        </FormContainer>
    )
}