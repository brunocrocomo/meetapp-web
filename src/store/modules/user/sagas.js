import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, avatar_id, ...rest } = payload.data;

        const profile = {
            name,
            email,
            avatar_id,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);

        toast.success('Your account has been updated successfully!');

        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        toast.error(
            'It was not possible to complete your request. Please, check your data and try again.'
        );
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
