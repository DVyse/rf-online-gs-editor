/**
 *
 * ProjectItemInteractingStdPrice
 *
 */

import { parseInt } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { Map /* , List */ } from 'immutable';
import { Input } from 'semantic-ui-react';
import { getStdPrice } from '~/containers/App/getters/projectItem';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemInteractingStdPrice extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeValue = evt => {
      const { onChangeValue, item } = this.props;
      onChangeValue(item, parseInt(evt.target.value.replace(/[^0-9]/g, '')));
    };
  }

  render() {
    const { item, itemNextValues, size, className, label } = this.props;

    const value = getStdPrice(itemNextValues.get('nextValue'), {
      entry: item,
    }).toLocaleString();

    return (
      <Input
        fluid
        size={size}
        className={className}
        value={value}
        onChange={this.changeValue}
        label={label}
      />
    );
  }
}

ProjectItemInteractingStdPrice.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ]),
};

ProjectItemInteractingStdPrice.defaultProps = {
  size: 'mini',
  className: '',
  label: null,
};

export default ProjectItemInteractingStdPrice;
