import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { fetchMeetupsRequest } from '~/store/modules/meetups/actions';
import { Container, Meetup } from './styles';

export default function Dashboard() {
    const dispatch = useDispatch();
    const meetups = useSelector(state => state.meetups.list);

    useEffect(() => {
        dispatch(fetchMeetupsRequest());
    }, [dispatch]);

    return (
        <Container>
            <header>
                <div>
                    <strong>Meus meetups</strong>
                </div>
                <aside>
                    <Link to="/profile">
                        <button type="button">
                            <MdAddCircleOutline size={24} color="#FFF" />
                            Novo meetup
                        </button>
                    </Link>
                </aside>
            </header>

            <ul>
                {meetups.map(meetup => (
                    <Link key={meetup.id} to={`/meetups/${meetup.id}/details`}>
                        <Meetup past={meetup.past}>
                            <div>
                                <strong>{meetup.title}</strong>
                            </div>
                            <span>
                                {meetup.formattedDate}
                                <MdChevronRight size={24} color="#FFF" />
                            </span>
                        </Meetup>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}
