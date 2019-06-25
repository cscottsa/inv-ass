import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

export class AlbumTracklist extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    zone: PropTypes.object,
  };

  formatTrackDuration = duration =>
    new moment()
      .startOf('day')
      .seconds(duration)
      .format('mm:ss');

  render() {
    if (!this.props.zone.albumTracklist.length) return null;

    return (
      <div key="AlbumTracklist" className="AlbumTracklist">
        <img src={this.props.zone.album.cover_medium} alt="albumTracklistCover" />
        <div className="content">
          <h3>{this.props.zone.album.name}</h3>
          <div className="tracklist">
            <div className="tracklist__item col-head">
              <span>#</span>
              <span>Title</span>
              <span>Artist</span>
              <span>Time</span>
              <span>Released</span>
            </div>
            {this.props.zone.albumTracklist.map((track, index) => (
              <a
                key={`tracklist${index}`}
                href={track.preview}
                className="tracklist__item"
                target="popup"
                onClick={() => {
                  window.open(`${track.preview}`, 'popup', 'width=300,height=40');
                  return false;
                }}
              >
                <span>{index + 1}</span>
                <span>{track.title}</span>
                <span>{track.artist.name}</span>
                <span>{this.formatTrackDuration(track.duration)}</span>
                <span>{this.props.zone.album.release_date.substring(0, 4)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { zone: state.zone };
}

export default connect(mapStateToProps)(AlbumTracklist);
