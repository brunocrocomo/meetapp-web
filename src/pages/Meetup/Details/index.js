import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import history from '~/services/history';
// import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Meetup, EditButton, CancelButton } from './styles';

export default function Details({ match }) {
    const meetupId = Number(match.params.id);
    const meetups = useSelector(state => state.meetups.list);
    const dispatch = useDispatch();

    const meetup = meetups.find(m => m.id === meetupId);

    if (!meetup) {
        return <Redirect to="/dashboard" />;
    }

    async function handleEdit() {
        history.push(`/meetup/edit/${meetupId}`);
    }

    async function handleCancel() {
        try {
            // dispatch(cancelMeetupRequest(meetupId));
        } catch (error) {
            toast.error('Houve um erro ao cancelar o meetup');
        }
    }

    return (
        <Container>
            <header>
                <strong>{meetup.title}</strong>
                <aside>
                    <EditButton
                        type="button"
                        className="edit"
                        onClick={handleEdit}
                    >
                        <MdModeEdit size={20} />
                        Editar
                    </EditButton>
                    <CancelButton
                        type="button"
                        className="cancel"
                        onClick={handleCancel}
                    >
                        <MdDeleteForever size={20} />
                        Cancelar
                    </CancelButton>
                </aside>
            </header>
            <Meetup>
                <img src={meetup.file.url} alt={meetup.title} />
                <p>{meetup.description}</p>
                <div>
                    <span>
                        <MdEvent size={17} />
                        {meetup.formattedDate}
                    </span>
                    <span>
                        <MdPlace size={17} />
                        {meetup.location}
                    </span>
                </div>
            </Meetup>
        </Container>
    );
}

Details.propTypes = {
    match: PropTypes.shape().isRequired,
};
