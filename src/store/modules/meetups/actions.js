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
