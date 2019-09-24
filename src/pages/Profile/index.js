import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import Button from '~/components/Button';
import { Container, AddIcon } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector(state => state.user);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input
                    name="name"
                    placeholder="Nome completo"
                    autoComplete="off"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                    autoComplete="off"
                />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                    autoComplete="off"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                    autoComplete="off"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                    autoComplete="off"
                />
                <Button
                    icon={<AddIcon size={20} color="#FFF" />}
                    type="submit"
                    label="Salvar perfil"
                    loading={loading}
                />
            </Form>
        </Container>
    );
}
