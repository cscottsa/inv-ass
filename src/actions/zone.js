/* eslint-disable no-undef */
// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { deezerGetArtists: getArtists } = createActions({
  [ActionTypes.DEEZER_GET_ARTISTS]: (searchTerm: string) => ({ searchTerm }),
});

export const { getArtistAlbums: getArtistAlbums } = createActions({
  [ActionTypes.GET_ARTIST_ALBUMS]: (artist: object) => ({ artist }),
});

export const { getAlbum: getAlbum } = createActions({
  [ActionTypes.GET_ALBUM]: (album: object) => ({ album }),
});

export const { resetZone: resetZone } = createActions({
  [ActionTypes.RESET_ZONE]: (searchTerm: string) => ({ searchTerm }),
});
