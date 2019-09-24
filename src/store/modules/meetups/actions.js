export function fetchMeetupsRequest() {
    return {
        type: '@meetups/FETCH_MEETUPS_REQUEST',
    };
}

export function fetchMeetupsSuccess(meetups) {
    return {
        type: '@meetups/FETCH_MEETUPS_SUCCESS',
        payload: { meetups },
    };
}

export function fetchMeetupsFailure() {
    return {
        type: '@meetups/FETCH_MEETUPS_FAILURE',
    };
}

export function createMeetupRequest(
    title,
    description,
    date,
    location,
    file_id
) {
    return {
        type: '@meetups/CREATE_MEETUP_REQUEST',
        payload: { title, description, date, location, file_id },
    };
}

export function createMeetupSuccess() {
    return {
        type: '@meetups/CREATE_MEETUP_SUCCESS',
    };
}

export function createMeetupFailure() {
    return {
        type: '@meetups/CREATE_MEETUP_FAILURE',
    };
}

export function updateMeetupRequest(
    id,
    title,
    description,
    date,
    location,
    file_id
) {
    return {
        type: '@meetups/UPDATE_MEETUP_REQUEST',
        payload: { id, title, description, date, location, file_id },
    };
}

export function updateMeetupSuccess() {
    return {
        type: '@meetups/UPDATE_MEETUP_SUCCESS',
    };
}

export function updateMeetupFailure() {
    return {
        type: '@meetups/UPDATE_MEETUP_FAILURE',
    };
}

export function cancelMeetupRequest(id) {
    return {
        type: '@meetups/CANCEL_MEETUP_REQUEST',
        payload: { id },
    };
}

export function cancelMeetupSuccess() {
    return {
        type: '@meetups/CANCEL_MEETUP_SUCCESS',
    };
}

export function cancelMeetupFailure() {
    return {
        type: '@meetups/CANCEL_MEETUP_FAILURE',
    };
}
