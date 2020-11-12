import { combineReducers } from 'redux';

const shelfItems = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_SHELF_ITEMS':
            return action.payload;
    }
}

export default combineReducers ({
    shelfItems,
});