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
    title: Yup.string().required('The title field is required.'),
    description: Yup.string().required('The description field is required.'),
    date: Yup.date().required('The date field is required.'),
    location: Yup.string().required('The location field is required.'),
    file_id: Yup.number().required('Your meetup should have a display image!'),
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
                <Input name="title" placeholder="Title" autoComplete="off" />
                <Input
                    name="description"
                    placeholder="Description"
                    multiline
                    autoComplete="off"
                />
                <DatePicker name="date" placeholder="Date" />
                <Input
                    name="location"
                    placeholder="Location"
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
