import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import Button from '~/components/Button';
import { Container, AddIcon } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('The name field is required.'),
    email: Yup.string()
        .email('Type a valid e-mail.')
        .required('The e-mail field is required.'),
});

export default function Profile() {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector(state => state.user);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
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

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Current password"
                    autoComplete="off"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="New password"
                    autoComplete="off"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    autoComplete="off"
                />
                <Button
                    icon={<AddIcon size={20} color="#FFF" />}
                    type="submit"
                    label="Save profile"
                    loading={loading}
                />
            </Form>
        </Container>
    );
}
