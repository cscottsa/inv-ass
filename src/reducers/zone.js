import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { parseError } from 'modules/client';

import { ActionTypes, STATUS } from 'constants/index';

function initZoneState() {
  return {
    searchTerm: '',
    artist: {},
    artists: [],
    album: '',
    artistAlbums: [],
    albumTracklist: [],
  };
}

export const zoneState = initZoneState();

export default {
  zone: handleActions(
    {
      [ActionTypes.RESET_ZONE]: (state, { payload }) => immutable(state, { $set: initZoneState() }),
      [ActionTypes.DEEZER_GET_ARTISTS_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          artists: { $set: payload.artists },
          searchTerm: { $set: payload.searchTerm },
        }),
      [ActionTypes.DEEZER_GET_ARTISTS_FAILURE]: (state, { payload }) =>
        immutable(state, {
          artists: { $set: [] },
          searchTerm: { $set: payload.searchTerm },
        }),
      [ActionTypes.GET_ARTIST_ALBUMS_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          artists: { $set: [] },
          artist: { $set: payload.artist },
          artistAlbums: { $set: payload.artistAlbums },
        }),
      [ActionTypes.GET_ARTIST_ALBUMS_FAILURE]: (state, { payload }) =>
        immutable(state, {
          artist: { $set: {} },
          artistAlbums: { $set: [] },
        }),
      [ActionTypes.GET_ALBUM_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          album: { $set: payload.album },
          albumTracklist: { $set: payload.albumTracklist },
        }),
      [ActionTypes.GET_ALBUM_FAILURE]: (state, { payload }) =>
        immutable(state, {
          album: { $set: {} },
          albumTracklist: { $set: [] },
        }),
    },
    zoneState,
  ),
};
