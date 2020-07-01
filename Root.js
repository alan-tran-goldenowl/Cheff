import React from 'react';
import { connect } from 'react-redux';

import { onGetAllTypeFood } from 'actions/typeFood';
import { onGetAllFood } from 'actions/food';
import NavigationRoot from 'navigation/SwitchNavigation';

class Root extends React.Component {
  componentDidMount() {
    const { getAllTypeFood, getAllFood } = this.props;
    getAllTypeFood();
    getAllFood();
  }

  render() {
    return (<NavigationRoot />);
  }
}

const mapActionsToProps = dispatch => ({
  getAllTypeFood: () => dispatch(onGetAllTypeFood()),
  getAllFood: () => dispatch(onGetAllFood())
});

export default connect(null, mapActionsToProps)(Root);
