import React from 'react';
import { connect } from 'react-redux';

import { onGetAllTypeFood } from 'actions/typeFood';
import NavigationRoot from 'navigation/SwitchNavigation';

class Root extends React.Component {
  componentDidMount() {
    const { getAllTypeFood } = this.props;
    getAllTypeFood();
  }

  render() {
    return (<NavigationRoot />);
  }
}

const mapActionsToProps = dispatch => ({
  getAllTypeFood: () => dispatch(onGetAllTypeFood()),
});

export default connect(null, mapActionsToProps)(Root);
