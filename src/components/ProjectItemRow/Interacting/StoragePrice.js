/**
 *
 * ProjectItemRowInteractingStoragePrice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { parseInt } from 'lodash';
import { Map /* , List */ } from 'immutable';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemRowInteractingStoragePrice extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeValue = evt => {
      const { onChangeValue, item } = this.props;
      onChangeValue(item, parseInt(evt.target.value.replace(/[^0-9]/g, '')));
    };
  }

  render() {
    const { item, itemNextValues } = this.props;

    const nextValue = itemNextValues.getIn([
      'nextValue',
      'server',
      'nStoragePrice',
    ]);

    const currValue = item.getIn(
      [['server', 'nStoragePrice'], ['client', 'nStoragePrice']].find(
        fieldSets => !!item.getIn(fieldSets) !== undefined,
      ) || ['server', 'nStoragePrice'],
      0,
    );

    const value = (
      parseInt(nextValue !== undefined ? nextValue : currValue) || 0
    ).toLocaleString();

    return (
      <div className="field has-addons">
        <p className="control">
          <span className="button is-small">
            <FormattedMessage {...messages.StoragePrice} />:
          </span>
        </p>
        <input
          className="input is-small"
          type="text"
          value={value}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}

ProjectItemRowInteractingStoragePrice.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default ProjectItemRowInteractingStoragePrice;
