import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, AddIcon } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

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

                <button className="meetapp" type="submit">
                    <AddIcon size={24} color="#FFF" />
                    Salvar perfil
                </button>
            </Form>
        </Container>
    );
}
