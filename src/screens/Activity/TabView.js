import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ActivityItem from 'components/ActivityItem';

const RenderItem = ({ list }) => {
  const renderEmptyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 15, color: '#a7a7a7', marginVertical: 5 }}>Nothing!!!</Text>
    </View>
  );

  return (
    <View style={{
      backgroundColor: '#fff', flex: 1, paddingLeft: 20, marginTop: 20,
    }}
    >
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={list}
        renderItem={({ item }) => <ActivityItem item={item} />}
        keyExtractor={item => item.timeStamp.toString()}
        ListEmptyComponent={renderEmptyScreen}
      />
    </View>
  );
};


export default RenderItem;
