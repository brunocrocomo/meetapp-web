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
