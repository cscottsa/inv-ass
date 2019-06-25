import axios from 'axios';

export function callGetArtist(term) {
  return axios
    .get(`http://api.deezer.com/search/artist/?q=${term}&index=0&limit=10&output=json`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function callGetArtistAlbums(artist) {
  return axios
    .get(`https://api.deezer.com/search?q=artist:"${artist.name}"`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function callGetAlbum(album) {
  return axios
    .get(`https://api.deezer.com/album/${album.album.id}`)
    .then(response => response)
    .catch(error => {
      throw error;
    });
}
