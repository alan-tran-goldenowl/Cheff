import React from 'react';
import {
  View, Text, SectionList,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ToDoItem from './Item';

const RenderItem = ({ list, navigation }) => {
  const renderEmptyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 15, color: '#a7a7a7', marginVertical: 5 }}>Nothing!!!</Text>
    </View>
  );

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
    }}
    >
      <SectionList
        renderEmptyScreen={renderEmptyScreen}
        sections={list}
        keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={() => (
          <View style={{
            height: 2, backgroundColor: '#f5f5f5', marginHorizontal: 20,
          }}
          />
        )}
        renderItem={({ item, index }) => (
          <ToDoItem
            onPress={() => {
              navigation.navigate('TodoPlanDetail', { planId: item.id });
            }}
            item={item}
            isLast={index !== list.length - 1}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ paddingVertical: 12, paddingHorizontal: 20, backgroundColor: '#f5f5f5' }}>
            <Text>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default withNavigation(RenderItem);
