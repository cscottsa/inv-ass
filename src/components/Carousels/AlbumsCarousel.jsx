import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAlbum } from 'actions/index';

export class AlbumsCarousel extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    zone: PropTypes.object,
  };

  render() {
    if (!this.props.zone.artistAlbums.length) return null;

    return (
      <div key="AlbumsCarousel" className="AlbumsCarousel">
        <h4>ALBUMS</h4>
        <div className="AlbumsCarousel__block">
          {this.props.zone.artistAlbums.map((album, index) => (
            <a
              className="AlbumsCarousel__block__item"
              key={`albums${index}`}
              onClick={() => this.props.dispatch(getAlbum(album))}
            >
              <img src={album.album.cover_medium} />
              <span className="title">{album.album.title}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { zone: state.zone };
}

export default connect(mapStateToProps)(AlbumsCarousel);
