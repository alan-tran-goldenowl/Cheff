import React from 'react';
import {
  View, Image, TouchableOpacity, FlatList,
} from 'react-native';
import SearchViewCheff from '../components/SearchViewCheff';
import SearchItem from '../components/SearchItem';
import styles from '../styles/SearchStyle';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
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
    const data = this.props.navigation.getParam('data')
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.iconBack}
              resizeMode="center"
              source={require('../assets/images/icon_back.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchView}>
          <SearchViewCheff
            value={searchText}
            overrideStyle={styles.search}
            onChangeText={this.onChangeText}
          />
          <FlatList
            data={searchText.length > 0 ? filterData : []}
            renderItem={({ item }) => <SearchItem item={item} />}
            keyExtractor={item => String(item.key)}
            extraData={this.state.searchText}
          />
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
