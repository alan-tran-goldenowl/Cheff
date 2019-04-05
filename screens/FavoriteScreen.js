import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity, FlatList,
} from 'react-native';

import SearchViewCheff from '../components/SearchViewCheff';
import FoodItem from '../components/FoodItem';
import styles from '../styles/FavoriteStyle';
import { connect } from '../recontext/store';

class FavoriteScreen extends Component {
  static navigationOptions = {
    header: null,
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
        <View style={styles.header}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Image
                style={styles.icon}
                resizeMode="center"
                source={require('../assets/images/icon_side_menu.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Favorites</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Image
                style={styles.icon}
                resizeMode="center"
                source={require('../assets/images/ic_push_notification.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchView}>
          <SearchViewCheff
            moveToSeacrh={() => this.props.navigation.navigate('Search', {
              data: this.props.listFood.filter(i => i.favorite),
            })}
            pointerEvents="none"
          />
        </View>
        <FlatList
          data={this.state.listFavoriteFood}
          renderItem={({ item }) => <FoodItem item={item} />}
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
