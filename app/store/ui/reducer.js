import { DECREMENT, INCREMENT } from './actions';

const initialState = {
    counter: 0
};

const uiStore = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            };
        }
        default:
            return state;
    }
};

export default uiStore;
