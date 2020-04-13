import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import SearchViewCheff from 'components/SearchViewCheff';
import FoodItem from 'components/FoodItem';
import Header from 'components/Header';
import styles from './styles';
import { connect } from '../../../recontext/store';

class FavoriteScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      listFavoriteFood: props.listFood.filter(i => i.favorite) || [],
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      if (
        JSON.stringify(this.state.listFavoriteFood)
        !== JSON.stringify(this.props.listFood.filter(i => i.favorite))
      ) {
        this.setState({ listFavoriteFood: this.props.listFood.filter(i => i.favorite) });
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.state.listFavoriteFood.length === 0) {
      this.setState({ listFavoriteFood: newProps.listFood.filter(i => i.favorite) });
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          iconLeft={require('assets/images/icon_side_menu.png')}
          onPressLeft={() => this.props.navigation.navigate('Settings')}
          iconRight={require('assets/images/ic_push_notification.png')}
          onPressRight={() => {}}
          title="Favorites"
        />
        <View style={styles.searchView}>
          <SearchViewCheff
            moveToSeacrh={() => this.props.navigation.navigate('Search', {
              data: this.props.listFood.filter(i => i.favorite),
            })
            }
            pointerEvents="none"
          />
        </View>
        <FlatList
          data={this.state.listFavoriteFood}
          renderItem={({ item }) => (
            <FoodItem
              item={item}
              onPressItem={() => this.props.navigation.navigate('FoodDetail', { data: item })}
            />
          )}
          keyExtractor={item => String(item.key)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFood: state.listFood,
});

export default connect(mapStateToProps)(FavoriteScreen);
