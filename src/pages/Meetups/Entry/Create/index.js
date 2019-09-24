import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { createMeetupRequest } from '~/store/modules/meetups/actions';

import Button from '~/components/Button';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { Container } from '../styles';

const schema = Yup.object().shape({
    title: Yup.string().required('Insira um título para o meetup'),
    description: Yup.string().required('Insira uma descrição para o meetup'),
    date: Yup.date().required('Insira uma data para o meetup'),
    location: Yup.string().required('Insira o local do meetup'),
    file_id: Yup.number().required(
        'É obrigatório inserir uma imagem para o meetup'
    ),
});

export default function Create() {
    const { loading } = useSelector(state => state.meetups);
    const dispatch = useDispatch();

    function handleSubmit({ title, description, date, location, file_id }) {
        dispatch(
            createMeetupRequest(title, description, date, location, file_id)
        );
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <ImageInput name="file_id" />
                <Input
                    name="title"
                    placeholder="Título do meetup"
                    autoComplete="off"
                />
                <Input
                    name="description"
                    placeholder="Descrição completa"
                    multiline
                    autoComplete="off"
                />
                <DatePicker name="date" placeholder="Data do meetup" />
                <Input
                    name="location"
                    placeholder="Localização"
                    autoComplete="off"
                />
                <Button
                    icon={<MdAddCircleOutline size={20} color="#FFF" />}
                    type="submit"
                    label="Salvar meetup"
                    loading={loading}
                />
            </Form>
        </Container>
    );
}
