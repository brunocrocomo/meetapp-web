import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { zonedTimeToUtc } from 'date-fns-tz';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { updateMeetupRequest } from '~/store/modules/meetups/actions';

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
        'É obrigatório definir uma imagem para o meetup'
    ),
});

export default function Update({ match }) {
    const dispatch = useDispatch();

    const meetupId = Number(match.params.id);
    const { list: meetups, loading } = useSelector(state => state.meetups);

    const meetup = meetups.find(m => m.id === meetupId);

    if (!meetup) {
        return <Redirect to="/dashboard" />;
    }

    const currentMeetup = {
        title: meetup.title,
        description: meetup.description,
        date: zonedTimeToUtc(meetup.date),
        location: meetup.location,
        file_id: {
            url: meetup.file.url,
            id: meetup.file.id,
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
                    label="Save meetup"
                    loading={loading}
                />
            </Form>
        </Container>
    );
}

Update.propTypes = {
    match: PropTypes.shape().isRequired,
};
