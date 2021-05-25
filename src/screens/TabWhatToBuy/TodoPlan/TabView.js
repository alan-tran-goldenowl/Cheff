import React from 'react';
import {
  View, Text, SectionList, StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { responsive } from 'utils';
import Button from 'components/Button';
import ToDoItem from './component/TodoItem';

const RenderItem = ({ list, navigation }) => {
  const renderEmptyScreen = () => (
    <View style={styles.containerEmpty}>
      <Text style={styles.textEmpty}>TRỐNG!!!</Text>
    </View>
  );

  const renderList = () => (
    <SectionList
      renderEmptyScreen={renderEmptyScreen}
      sections={list}
      keyExtractor={(item, index) => item.id + index}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}
      renderItem={({ item }) => (
        <ToDoItem
          onPress={() => {
            navigation.navigate('TodoPlanDetail', { id: item.id });
          }}
          item={item}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.containerTitle}>
          <Text>{title}</Text>
        </View>
      )}
    />
  );

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
    }}
    >
      {
      list.length
        ? renderList()
        : renderEmptyScreen()
    }

      <Button
        buttonStyle={styles.btnCreate}
        title="TẠO MỚI"
        onPress={() => navigation.navigate('CreatePlanToBuy')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnCreate: {
    marginBottom: responsive({ d: 35 }),
    marginHorizontal: responsive({ d: 30 }),
  },
  containerEmpty: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  textEmpty: { fontSize: 15, color: '#a7a7a7', marginVertical: 5 },
  separator: {
    height: 2, backgroundColor: '#f5f5f5', marginHorizontal: 20,
  },
  containerTitle: { paddingVertical: 12, paddingHorizontal: 20, backgroundColor: '#f5f5f5' },
});


export default withNavigation(RenderItem);
