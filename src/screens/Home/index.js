import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import SearchViewCheff from 'components/SearchViewCheff';
import HomeTab from 'components/HomeTab/HomeTab';
import Header from 'components/Header';
import styles from './styles';


class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  renderHeader() {
    return (
      <React.Fragment>
        <Header
          logoVisible
          iconLeft={require('assets/images/icon_side_menu.png')}
          onPressLeft={() => this.props.navigation.navigate('Settings')}
          iconRight={require('assets/images/ic_push_notification.png')}
        />
        <View style={styles.searchView}>
          <Image
            resizeMode="stretch"
            source={require('assets/images/img1.jpg')}
            style={styles.backgroundImage}
          />
          <View style={styles.search}>
            <SearchViewCheff
              moveToSeacrh={() => this.props.navigation.navigate('Search', {
                data: this.props.listFood,
              })}
              pointerEvents="none"
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

  render() {
    const { typeFood } = this.props;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <HomeTab
          tab={typeFood}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ food, TypeFood }) => ({
  listFood: food.listFood,
  typeFood: TypeFood.list,
});

export default connect(mapStateToProps)(HomeScreen);
