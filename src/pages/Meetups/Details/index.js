import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import history from '~/services/history';
import { cancelMeetupRequest } from '~/store/modules/meetups/actions';

import Button from '~/components/Button';
import { Container, Meetup } from './styles';

export default function Details({ match }) {
    const meetupId = Number(match.params.id);
    const { list: meetups, loading } = useSelector(state => state.meetups);
    const dispatch = useDispatch();

    const meetup = meetups.find(m => m.id === meetupId);

    if (!meetup) {
        return <Redirect to="/dashboard" />;
    }

    async function handleEdit() {
        history.push(`/meetups/${meetupId}/update`);
    }

    async function handleCancel() {
        dispatch(cancelMeetupRequest(meetupId));
    }

    return (
        <Container>
            <header>
                <strong>{meetup.title}</strong>
                {!meetup.past && (
                    <aside>
                        <Button
                            type="button"
                            icon={<MdModeEdit size={20} color="#FFF" />}
                            id="edit"
                            label="Edit"
                            onClick={handleEdit}
                        />
                        <Button
                            type="button"
                            icon={<MdDeleteForever size={20} color="#FFF" />}
                            id="cancel"
                            label="Cancel"
                            loading={loading}
                            onClick={handleCancel}
                        />
                    </aside>
                )}
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
