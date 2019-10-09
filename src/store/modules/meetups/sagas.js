import { all, takeLatest, call, put } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
    fetchMeetupsSuccess,
    createMeetupSuccess,
    updateMeetupSuccess,
    cancelMeetupSuccess,
    meetupsFailure,
} from './actions';

import history from '~/services/history';

export function* fetchMeetups() {
    try {
        const response = yield call(api.get, 'organizing');

        const meetups = response.data.map(meetup => ({
            ...meetup,
            formattedDate: format(parseISO(meetup.date), 'MMMM do, h:mm a'),
        }));

        yield put(fetchMeetupsSuccess(meetups));
    } catch (error) {
        toast.error('An error ocurred while loading the meetup list.');
        yield put(meetupsFailure());
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
        toast.success('Your meetup has been created successfully!');
    } catch (error) {
        toast.error(
            'It was not possible to complete your request. Please, check your data and try again.'
        );
        yield put(meetupsFailure());
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
        toast.success('Your meetup has been updated successfully!');
    } catch (error) {
        toast.error(
            'It was not possible to complete your request. Please, check your data and try again.'
        );
        yield put(meetupsFailure());
    }
}

export function* cancelMeetup({ payload }) {
    try {
        const { id } = payload;

        yield call(api.delete, `meetups/${id}`);
        yield put(cancelMeetupSuccess());

        history.push('/dashboard');
        toast.success('Your meetup has been canceled successfully!');
    } catch (error) {
        toast.error('It was not possible to complete your request.');
        yield put(meetupsFailure());
    }
}

export default all([
    takeLatest('@meetups/FETCH_MEETUPS_REQUEST', fetchMeetups),
    takeLatest('@meetups/CREATE_MEETUP_REQUEST', createMeetup),
    takeLatest('@meetups/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetups/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
