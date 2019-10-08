import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import Button from '~/components/Button';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Type a valid e-mail.')
        .required('The e-mail field is required.'),
    password: Yup.string().required('The password field is required.'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Meetapp" />
            <Form schema={schema} onSubmit={handleSubmit}>
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
                <Button type="submit" label="Login" loading={loading} />
                <Link to="/register">Create a free account</Link>
            </Form>
        </>
    );
}
