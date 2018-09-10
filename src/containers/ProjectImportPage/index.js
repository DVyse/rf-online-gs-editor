/**
 *
 * ProjectImportPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import styled from 'styled-components';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectProjectImportPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeId } from './actions';
import {
  makeSelectIsLoggedIn,
  makeSelectCurrentUser,
  makeSelectProjectsImports,
} from '../App/selectors';
import { makeSelectProject } from '../ProjectPage/selectors';
import {
  logoutCurrentUser,
  projectsImportsBindActionsWithFileKey,
} from '../App/actions';

import Header from '../../components/Header';
import Notification from '../../components/Notification';
import LoadingIndicator from '../../components/LoadingIndicator';
import ProjectMenu from '../../components/ProjectMenu';
import { CLIENT_FILES, FILES } from '../../utils/gameFiles';

/* eslint-disable react/prefer-stateless-function */
export class ProjectImportPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderFiles = this.renderFiles.bind(this);
  }

  componentWillMount() {
    this.loadProjectIfIdChanged(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loadProjectIfIdChanged(nextProps);
  }

  loadProjectIfIdChanged(props) {
    const { id } = props.projectImportPage;
    const { match } = props;
    const { params } = match;

    const nextId = params.id;

    if (id !== nextId) {
      props.fnChangeId(nextId);
    }
  }

  renderFiles(files = {}) {
    const {
      fnProjectsImportsChangeFilePropValue,
      projectsImports,
      projectImportPage,
    } = this.props;

    const { project } = projectImportPage;
    const projectImports = projectsImports.get(project.id, Map({}));

    return map(files, (file, key) => {
      const fileActions = fnProjectsImportsChangeFilePropValue[key];
      const fileState = projectImports.get(key, Map({}));
      const filePath = fileState.get('filePath', '').trim();

      return (
        <FileRow key={key}>
          <div className="overlay" />
          <div className="file-actions">
            <div className="import-type">
              <button
                type="button"
                onClick={() => fileActions.changeImportType('LOL')}
              >
                Todo Change Import Type
              </button>
            </div>
          </div>
          <div className="file-type">
            <span className="tag is-info is-small">{file.type}</span>
          </div>
          <div className="file-title">{file.title || file.path}</div>
          <div className="is-clearfix" />
          <div className="file-selected">
            <code>
              {filePath.substring(
                filePath.length > 64 ? filePath.length - 64 : 0,
                filePath.length,
              ) || <FormattedMessage {...messages.nothingSelected} />}
            </code>
          </div>
        </FileRow>
      );
    });
  }

  render() {
    const {
      isLoggedIn,
      currentUser,
      currentProject,
      projectImportPage,
      fnLogoutCurrentUser,
    } = this.props;

    const {
      project,
      isLoaded,
      isError,
      errorMessage,
      isLoading,
      id,
    } = projectImportPage;

    return (
      <div>
        <Helmet>
          <title>ProjectImportPage</title>
          <meta name="description" content="Description of ProjectImportPage" />
        </Helmet>

        <Header
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          currentProject={currentProject}
          onClickLogout={fnLogoutCurrentUser}
        />

        <div className="container is-fluid p-10">
          {isError && (
            <Notification className="is-danger">{errorMessage}</Notification>
          )}

          {isLoading && <LoadingIndicator />}

          {isLoaded && (
            <div className="columns">
              <div className="column is-2">
                <ProjectMenu
                  isLoggedIn={isLoggedIn}
                  project={currentProject}
                  projectId={id}
                  currentUser={currentUser}
                />
              </div>
              <div className="column">
                <p className="title is-4">
                  <FormattedMessage
                    {...messages.header}
                    values={{ title: project.title }}
                  />
                </p>

                <div className="columns">
                  <div className="column">
                    <p className="title is-6">
                      <FormattedMessage {...messages.ClientFiles} />
                    </p>

                    <div className="card">
                      {this.renderFiles(CLIENT_FILES)}
                      <pre>
                        <span className="has-text-link">
                          <FormattedMessage {...messages.clientHelpMessage} />
                        </span>
                      </pre>
                    </div>
                  </div>
                  <div className="column">
                    <p className="title is-6">
                      <FormattedMessage {...messages.ServerFiles} />
                    </p>

                    <div className="card">
                      <div className="card-content">...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProjectImportPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fnChangeId: PropTypes.func.isRequired,
  fnLogoutCurrentUser: PropTypes.func.isRequired,
  projectImportPage: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  isLoggedIn: PropTypes.bool.isRequired,
  currentProject: PropTypes.instanceOf(Map),
  currentUser: PropTypes.instanceOf(Map),
};

ProjectImportPage.defaultProps = {
  currentProject: null,
  currentUser: null,
};

const mapStateToProps = createStructuredSelector({
  projectImportPage: makeSelectProjectImportPage(),
  isLoggedIn: makeSelectIsLoggedIn(),
  currentProject: makeSelectProject(),
  currentUser: makeSelectCurrentUser(),
  projectsImports: makeSelectProjectsImports(),
});

function mapDispatchToProps(dispatch, props) {
  const projectId = props.match.params.id;
  const fnProjectsImportsChangeFilePropValue = {};
  Object.keys(FILES).forEach(fileKey => {
    fnProjectsImportsChangeFilePropValue[
      fileKey
    ] = projectsImportsBindActionsWithFileKey({ projectId, fileKey, dispatch });
  });

  return {
    dispatch,
    fnChangeId: id => dispatch(changeId(id)),
    fnLogoutCurrentUser: () => dispatch(logoutCurrentUser()),
    fnProjectsImportsChangeFilePropValue,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'projectImportPage', reducer });
const withSaga = injectSaga({ key: 'projectImportPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectImportPage);

const FileRow = styled.div`
  overflow: hidden;
  padding: 10px;
  position: relative;

  .file-actions,
  .overlay {
    visible: hidden;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    opacity: 0;
    transition: all 0.1s ease;
  }

  .file-actions {
    background: transparent;
    color: #fff;
    padding: 10px;
  }

  &:hover {
    background: #ddd;
    .overlay {
      visible: normal;
      opacity: 1;
    }
    .file-actions {
      visible: normal;
      opacity: 1;
    }
  }

  .file-type,
  .file-title,
  .file-selected {
    float: left;
    margin-right: 5px;
  }

  .file-title {
    position: relative;
    top: 2px;
  }

  .file-selected {
    margin-right: 0;
    float: none;
    margin-top: 5px;
    code {
      font-size: 11px;
      display: block;
    }
  }
`;
