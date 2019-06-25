import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getArtists, resetZone, getArtistAlbums } from 'actions/index';

export class SearchHeader extends React.Component {
  state = {
    searchTerm: '',
    typing: false,
    typingTimeout: 0,
  };

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    getArtistAlbums: PropTypes.func,
    zone: PropTypes.object,
  };

  onTyping = event => {
    const this_ = this;
    const searchTerm = event.target.value;

    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    if (!searchTerm) {
      this.props.dispatch(resetZone());
      return;
    }

    this.setState({
      searchTerm: event.target.value,
      typing: false,
      typingTimeout: setTimeout(() => {
        this_.props.dispatch(getArtists(this_.state.searchTerm));
      }, 350),
    });
  };

  render() {
    return (
      <div key="SearchHeader" className="SearchHeader">
        <div className="Searchbox">
          <input onChange={this.onTyping} placeholder="Search here" />
          <div className={`Searchbox__result${this.props.zone.artists.length ? ' active' : ''}`}>
            <div>Search Result</div>
            <ul>
              {this.props.zone.artists.map((artist, index) => (
                <li
                  key={`artistList${index}`}
                  onClick={() => this.props.dispatch(getArtistAlbums(artist))}
                >
                  <a>{artist.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Hello, I'm a useless button, because the design asked for me :P */}
        <button>SEARCH</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zone: state.zone };
}

export default connect(mapStateToProps)(SearchHeader);
