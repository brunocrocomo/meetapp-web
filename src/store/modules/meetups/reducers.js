import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    list: [],
};

export default function meetup(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetups/FETCH_MEETUPS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@meetups/FETCH_MEETUPS_SUCCESS': {
                draft.loading = false;
                draft.list = action.payload.meetups;
                break;
            }
            case '@meetups/FETCH_MEETUPS_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
