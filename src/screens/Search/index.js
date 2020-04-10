import React from 'react';
import { View, FlatList } from 'react-native';
import SearchViewCheff from 'components/SearchViewCheff';
import SearchItem from 'components/SearchItem';
import Header from 'components/Header';
import styles from './styles';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    const filterData = props.navigation.getParam('data');
    this.state = {
      searchText: '',
      filterData,
    };
  }

  onChangeText = (searchText) => {
    let filterData = [];
    const data = this.props.navigation.getParam('data');
    if (searchText.length > 0) {
      filterData = data.filter(
        i => i.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          || i.ingredients.map(e => e.name.toLowerCase()).indexOf(searchText.toLowerCase()) > -1,
      );
    }
    this.setState({ filterData, searchText });
  };

  render() {
    const { searchText, filterData } = this.state;
    return (
      <View style={styles.container}>
        <Header
          iconLeft={require('assets/images/icon_back.png')}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.searchView}>
          <SearchViewCheff
            autoFocus
            value={searchText}
            overrideStyle={styles.search}
            onChangeText={this.onChangeText}
          />
          <FlatList
            data={searchText.length > 0 ? filterData : []}
            renderItem={({ item }) => (
              <SearchItem
                item={item}
                onPressItem={() => this.props.navigation.navigate('FoodDetail', { data: item })}
              />
            )}
            keyExtractor={item => String(item.key)}
            extraData={this.state.searchText}
          />
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
