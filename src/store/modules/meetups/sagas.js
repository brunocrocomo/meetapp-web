import { all, takeLatest, call, put } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
    fetchMeetupsSuccess,
    fetchMeetupsFailure,
    createMeetupSuccess,
    createMeetupFailure,
    updateMeetupSuccess,
    updateMeetupFailure,
    cancelMeetupSuccess,
    cancelMeetupFailure,
} from './actions';

import history from '~/services/history';

export function* fetchMeetups() {
    try {
        const response = yield call(api.get, 'organizing');

        const meetups = response.data.map(meetup => ({
            ...meetup,
            formattedDate: format(
                parseISO(meetup.date),
                "dd 'de' MMMM',' 'às' HH'h'",
                {
                    locale: pt,
                }
            ),
        }));

        yield put(fetchMeetupsSuccess(meetups));
    } catch (error) {
        toast.error('Não foi possível carregar os meetups do servidor.');
        yield put(fetchMeetupsFailure());
    }
}

export function* createMeetup({ payload }) {
    try {
        const { title, description, date, location, file_id } = payload;

        yield call(api.post, 'meetups', {
            title,
            description,
            date,
            location,
            file_id,
        });

        yield put(createMeetupSuccess());

        history.push('/dashboard');
        toast.success('Meetup criado com sucesso!');
    } catch (error) {
        toast.error(
            'Falha ao criar o meetup. Verifique se todos os dados estão inseridos corretamente.'
        );
        yield put(createMeetupFailure());
    }
}

export function* updateMeetup({ payload }) {
    try {
        const { id, title, description, date, location, file_id } = payload;

        const meetup = {
            title,
            description,
            date,
            location,
            file_id,
        };

        yield call(api.put, `meetups/${id}`, meetup);
        yield put(updateMeetupSuccess());

        history.push('/dashboard');
        toast.success('Meetup atualizado com sucesso!');
    } catch (error) {
        toast.error('Falha ao atualizar, verifique seus dados!');
        yield put(updateMeetupFailure());
    }
}

export function* cancelMeetup({ payload }) {
    try {
        const { id } = payload;

        yield call(api.delete, `meetups/${id}`);
        yield put(cancelMeetupSuccess());

        history.push('/dashboard');
        toast.success('Meetup cancelado com sucesso!');
    } catch (error) {
        toast.error('Falha ao cancelar o meetup.');
        yield put(cancelMeetupFailure());
    }
}

export default all([
    takeLatest('@meetups/FETCH_MEETUPS_REQUEST', fetchMeetups),
    takeLatest('@meetups/CREATE_MEETUP_REQUEST', createMeetup),
    takeLatest('@meetups/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetups/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
