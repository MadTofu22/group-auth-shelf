import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* shelfSaga() {
    yield takeEvery ('FETCH_SHELF_ITEMS', fetchShelfItems);
  }

// GET route to retrieve all shelf items from server/DB then send to reducer
function* fetchShelfItems() {
    const shelfResponse = yield axios.get('/api/shelf');
    yield put ({type: 'SET_SHELF_ITEMS', payload: shelfResponse.data});
}

// POST to add a single shelf item to server/DB


// DELETE route to removed a single shelf item from the server/DB

export default shelfSaga;