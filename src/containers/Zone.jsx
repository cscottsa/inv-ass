import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchHeader from '../components/SearchHeader';
import AlbumTracklist from '../components/AlbumTracklist';
import AlbumsCarousel from '../components/Carousels/AlbumsCarousel';

export class Zone extends React.Component {
  static propTypes = {
    zone: PropTypes.object,
  };

  render() {
    return (
      <div key="Home" data-testid="HomeWrapper">
        <div className="container">
          <SearchHeader />
          {this.props.zone.searchTerm && (
            <div>
              <h3>Search results for "{this.props.zone.searchTerm}"</h3>
              <hr />
            </div>
          )}
          <AlbumsCarousel />
          <AlbumTracklist />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { zone: state.zone };
}

export default connect(mapStateToProps)(Zone);
