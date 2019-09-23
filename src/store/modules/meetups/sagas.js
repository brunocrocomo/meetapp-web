import { all, takeLatest, call, put } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
    fetchMeetupsSuccess,
    fetchMeetupsFailure,
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
    takeLatest('@meetups/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
