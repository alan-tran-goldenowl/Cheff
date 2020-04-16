import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ActivityItem from 'components/ActivityItem';

export default class RenderItem extends React.Component {
    _renderEmptyScreen = () => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, color: '#a7a7a7', marginVertical: 5 }}>Nothing!!!</Text>
      </View>
    )

    render() {
      const { list } = this.props;
      return (
        <View style={{
          backgroundColor: '#fff', flex: 1, paddingLeft: 20, marginTop: 20,
        }}
        >
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={list}
            renderItem={({ item }) => <ActivityItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
}
