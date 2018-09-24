/**
 *
 * ProjectItemInteractingDefenceFacingPresent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { parseInt } from 'lodash';
import { Map /* , List */ } from 'immutable';
import { Input } from 'semantic-ui-react';

import {
  getDefenceFacingPresentValue,
  getDefenctFacingUnpresentValue,
} from '../../../utils/converters';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from '../messages';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemInteractingDefenceFacingPresent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getDefGap = this.getDefGap.bind(this);

    this.changeValue = evt => {
      const { onChangeValue, item } = this.props;
      const value = getDefenctFacingUnpresentValue({
        presentValue: parseInt(evt.target.value),
        defGap: this.getDefGap(),
      });
      onChangeValue(item, value);
    };
  }

  getDefGap() {
    const { item, itemNextValues } = this.props;

    const nextValue = itemNextValues.getIn(['nextValue', 'server', 'fDefGap']);

    const currValue = item.getIn(
      [['server', 'fDefGap'], ['client', 'fDefGap']].find(
        fieldSets => item.getIn(fieldSets) !== undefined,
      ) || ['server', 'fDefGap'],
      0.5,
    );

    const value = nextValue !== undefined ? nextValue : currValue;
    return value;
  }

  render() {
    const { item, itemNextValues, size, className } = this.props;

    const nextValue = itemNextValues.getIn([
      'nextValue',
      'server',
      'fDefFacing',
    ]);

    const currValue = item.getIn(
      [['server', 'fDefFacing'], ['client', 'fDefFacing']].find(
        fieldSets => item.getIn(fieldSets) !== undefined,
      ) || ['server', 'fDefFacing'],
      1,
    );

    const value = nextValue !== undefined ? nextValue : currValue;
    const present = getDefenceFacingPresentValue({
      defFacing: value,
      defGap: this.getDefGap(),
    });

    return (
      <Input
        size={size}
        fluid
        type="number"
        value={present}
        onChange={this.changeValue}
        className={className}
      />
    );
  }
}

ProjectItemInteractingDefenceFacingPresent.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),
  className: PropTypes.string,
};

ProjectItemInteractingDefenceFacingPresent.defaultProps = {
  size: 'mini',
  className: '',
};

export default ProjectItemInteractingDefenceFacingPresent;
