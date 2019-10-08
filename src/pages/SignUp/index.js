import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import Button from '~/components/Button';

const schema = Yup.object().shape({
    name: Yup.string().required('The name field is required.'),
    email: Yup.string()
        .email('Type a valid e-mail.')
        .required('The e-mail field is required.'),
    password: Yup.string()
        .min(6, 'Your password should have at least 6 characters.')
        .required('The password field is required.'),
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
                    placeholder="Type your full name"
                    autoComplete="off"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Type your e-mail"
                    autoComplete="off"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Type your password"
                    autoComplete="off"
                />
                <Button
                    type="submit"
                    label="Create account"
                    loading={loading}
                />
                <Link to="/">I already have an account</Link>
            </Form>
        </>
    );
}
