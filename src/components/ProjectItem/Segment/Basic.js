/**
 *
 * ProjectItemSegmentBasic
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { Grid, Header, Segment } from 'semantic-ui-react';

import ProjectItemInteractingName from '../Interacting/Name';
import ProjectItemInteractingExchange from '../Interacting/Exchange';
import ProjectItemInteractingSell from '../Interacting/Sell';
import ProjectItemInteractingGround from '../Interacting/Ground';
import ProjectItemInteractingStoragePossible from '../Interacting/StoragePossible';
import ProjectItemInteractingMoneyType from '../Interacting/MoneyType';
import ProjectItemInteractingMoneyValue from '../Interacting/MoneyValue';
import ProjectItemInteractingStoragePrice from '../Interacting/StoragePrice';
import ProjectItemInteractingCivilBM from '../Interacting/CivilBM';
import ProjectItemInteractingCivilBF from '../Interacting/CivilBF';
import ProjectItemInteractingCivilCM from '../Interacting/CivilCM';
import ProjectItemInteractingCivilCF from '../Interacting/CivilCF';
import ProjectItemInteractingCivilA from '../Interacting/CivilA';
import ProjectItemInteractingStdPrice from '../Interacting/StdPrice';
import ProjectItemInteractingStdPoint from '../Interacting/StdPoint';
import ProjectItemInteractingGoldPoint from '../Interacting/GoldPoint';
import ProjectItemInteractingProcPoint from '../Interacting/ProcPoint';
import ProjectItemInteractingKillPoint from '../Interacting/KillPoint';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemSegmentBasic extends React.PureComponent {
  render() {
    const { item, itemNextValues, itemActions, moneyTypes } = this.props;

    return (
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={1} verticalAlign="top">
              <Header sub>Name</Header>
              <Header sub>Transfer & Civil permissions</Header>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign="top">
              <ProjectItemInteractingName
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeName}
                className="mb-15"
              />
              <ProjectItemInteractingExchange
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeExchange}
                className="mr-15 mb-5"
              />
              <ProjectItemInteractingSell
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeSell}
                className="mr-15 mb-5"
              />
              <ProjectItemInteractingGround
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeGround}
                className="mr-15 mb-5"
              />
              <ProjectItemInteractingStoragePossible
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeStoragePossible}
                className="mr-15 mb-5"
              />
              <div>
                <ProjectItemInteractingCivilBM
                  item={item}
                  itemNextValues={itemNextValues}
                  onChangeValue={itemActions.changeCivilBM}
                  className="mr-15 mb-5"
                />
                <ProjectItemInteractingCivilBF
                  item={item}
                  itemNextValues={itemNextValues}
                  onChangeValue={itemActions.changeCivilBF}
                  className="mr-15 mb-5"
                />
                <ProjectItemInteractingCivilCM
                  item={item}
                  itemNextValues={itemNextValues}
                  onChangeValue={itemActions.changeCivilCM}
                  className="mr-15 mb-5"
                />
                <ProjectItemInteractingCivilCF
                  item={item}
                  itemNextValues={itemNextValues}
                  onChangeValue={itemActions.changeCivilCF}
                  className="mr-15 mb-5"
                />
                <ProjectItemInteractingCivilA
                  item={item}
                  itemNextValues={itemNextValues}
                  onChangeValue={itemActions.changeCivilA}
                  className="mr-15 mb-5"
                />
              </div>
            </Grid.Column>
            <Grid.Column width={9} verticalAlign="top">
              <ProjectItemInteractingMoneyValue
                item={item}
                itemNextValues={itemNextValues}
                onChangeStdPrice={itemActions.changeStdPrice}
                onChangeStdPoint={itemActions.changeStdPoint}
                onChangeGoldPoint={itemActions.changeGoldPoint}
                onChangeProcPoint={itemActions.changeProcPoint}
                onChangeKillPoint={itemActions.changeKillPoint}
                types={moneyTypes}
                className="mb-5"
                label={
                  <ProjectItemInteractingMoneyType
                    item={item}
                    itemNextValues={itemNextValues}
                    onChangeValue={itemActions.changeMoney}
                    types={moneyTypes}
                  />
                }
              />
              <ProjectItemInteractingStdPrice
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeStdPrice}
                label="StdPrice"
                className="mb-5"
              />
              <ProjectItemInteractingStdPoint
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeStdPoint}
                label="StdPoint"
                className="mb-5"
              />
              <ProjectItemInteractingGoldPoint
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeGoldPoint}
                label="GoldPoint"
                className="mb-5"
              />
              <ProjectItemInteractingProcPoint
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeProcPoint}
                label="ProcPoint"
                className="mb-5"
              />
              <ProjectItemInteractingKillPoint
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeKillPoint}
                label="KillPoint"
                className="mb-5"
              />
              <ProjectItemInteractingStoragePrice
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={itemActions.changeStoragePrice}
                types={moneyTypes}
                label="Storage price"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

ProjectItemSegmentBasic.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  moneyTypes: PropTypes.instanceOf(List).isRequired,
  itemActions: PropTypes.shape({
    changeName: PropTypes.func.isRequired,
    changeExchange: PropTypes.func.isRequired,
    changeSell: PropTypes.func.isRequired,
    changeGround: PropTypes.func.isRequired,
    changeStoragePossible: PropTypes.func.isRequired,
    changeMoney: PropTypes.func.isRequired,
    changeStdPrice: PropTypes.func.isRequired,
    changeStdPoint: PropTypes.func.isRequired,
    changeGoldPoint: PropTypes.func.isRequired,
    changeProcPoint: PropTypes.func.isRequired,
    changeKillPoint: PropTypes.func.isRequired,
    changeStoragePrice: PropTypes.func.isRequired,
    changeCivilBM: PropTypes.func.isRequired,
    changeCivilBF: PropTypes.func.isRequired,
    changeCivilCM: PropTypes.func.isRequired,
    changeCivilCF: PropTypes.func.isRequired,
    changeCivilA: PropTypes.func.isRequired,
    changeItemGrade: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProjectItemSegmentBasic;