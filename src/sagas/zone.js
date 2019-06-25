import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { callGetArtist, callGetArtistAlbums, callGetAlbum } from '../api/general';

import { ActionTypes } from 'constants/index';


export function* getArtists({ payload }) {
  try {
    const response = yield call(callGetArtist, payload.searchTerm);
    yield put({
      type: ActionTypes.DEEZER_GET_ARTISTS_SUCCESS,
      payload: { artists: response.data, searchTerm: payload.searchTerm },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.DEEZER_GET_ARTISTS_FAILURE,
      payload: err,
    });
  }
}

export function* getArtistAlbums({ payload }) {
  try {
    const response = yield call(callGetArtistAlbums, payload.artist);
    yield put({
      type: ActionTypes.GET_ARTIST_ALBUMS_SUCCESS,
      payload: { artist: payload.artist, artistAlbums: response.data, artists: [] },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ARTIST_ALBUMS_FAILURE,
      payload: err,
    });
  }
}

export function* getAlbum({ payload }) {
  try {
    const response = yield call(callGetAlbum, payload.album);
    yield put({
      type: ActionTypes.GET_ALBUM_SUCCESS,
      payload: { album: response.data, albumTracklist: response.data.tracks.data },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ALBUM_FAILURE,
      payload: err,
    });
  }
}


/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.DEEZER_GET_ARTISTS, getArtists), 
    takeLatest(ActionTypes.GET_ARTIST_ALBUMS, getArtistAlbums),
    takeLatest(ActionTypes.GET_ALBUM, getAlbum),
  ]);
}
