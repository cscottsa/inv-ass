import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  SWITCH_MENU: undefined,
  EXCEPTION: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,

  RESET_ZONE: undefined,
  DEEZER_GET_ARTISTS: undefined,
  DEEZER_GET_ARTISTS_SUCCESS: undefined,
  DEEZER_GET_ARTISTS_FAILED: undefined,
  GET_ARTIST_ALBUMS: undefined,
  GET_ARTIST_ALBUMS_SUCCESS: undefined,
  GET_ARTIST_ALBUMS_FAILURE: undefined,
  GET_ALBUM: undefined,
  GET_ALBUM_SUCCESS: undefined,
  GET_ALBUM_FAILURE: undefined,
});

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
