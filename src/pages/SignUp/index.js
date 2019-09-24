import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import Button from '~/components/Button';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
        .email('Insira um e-mail válido.')
        .required('O e-mail é obrigatório.'),
    password: Yup.string()
        .min(6, 'No mínimo 6 carateres.')
        .required('A senha é obrigatória.'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="Meetapp" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="name"
                    placeholder="Nome completo"
                    autoComplete="off"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    autoComplete="off"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                    autoComplete="off"
                />
                <Button type="submit" label="Criar conta" loading={loading} />
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
