import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled, { css, ThemeProvider } from 'styled-components';
import treeChanges from 'tree-changes';

import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';

import config from 'config';
import { showAlert } from 'actions/index';

import styles from 'styles/style.scss';

import Zone from 'containers/Zone';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';

import 'styles/style.scss';

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(showAlert('Hello! And welcome!', { variant: 'success', icon: 'bell' }));
    }
  }

  render() {
    const { dispatch, user } = this.props;

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <div>
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
            <div>
              <Switch>
                <RoutePublic path="/" exact component={Zone} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default hot(connect(mapStateToProps)(App));
