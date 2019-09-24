import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { zonedTimeToUtc } from 'date-fns-tz';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { updateMeetupRequest } from '~/store/modules/meetups/actions';

import { Container } from '../styles';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

const schema = Yup.object().shape({
    title: Yup.string().required('Insira um título para o meetup'),
    description: Yup.string().required('Insira uma descrição para o meetup'),
    date: Yup.date().required('Insira uma data para o meetup'),
    location: Yup.string().required('Insira o local do meetup'),
    // @TODO: Check why unform isn't showing validation message for file_id
    file_id: Yup.number().required(
        'É obrigatório inserir uma imagem para o meetup'
    ),
});

export default function Update({ match }) {
    const dispatch = useDispatch();

    const meetupId = Number(match.params.id);
    const meetups = useSelector(state => state.meetups.list);
    const loading = useSelector(state => state.user.loading);

    const meetup = meetups.find(m => m.id === meetupId);

    const currentMeetup = {
        title: meetup.title,
        description: meetup.description,
        date: zonedTimeToUtc(meetup.date),
        location: meetup.location,
        file: {
            url: meetup.file.url,
            id: meetup.file.id,
            path: meetup.file.path,
        },
    };

    function handleSubmit({ title, description, date, location, file_id }) {
        dispatch(
            updateMeetupRequest(
                meetupId,
                title,
                description,
                date,
                location,
                file_id
            )
        );
    }

    return (
        <Container>
            <Form
                schema={schema}
                initialData={currentMeetup}
                onSubmit={handleSubmit}
            >
                <ImageInput name="file" />
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
                <button className="meetapp" type="submit">
                    {loading ? (
                        'Enviando dados...'
                    ) : (
                        <>
                            <MdAddCircleOutline size={20} />
                            Salvar meetup
                        </>
                    )}
                </button>
            </Form>
        </Container>
    );
}

Update.propTypes = {
    match: PropTypes.shape().isRequired,
};
