
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import images from 'assets/images';
import { withNavigation } from 'react-navigation';
import Header from 'components/Header';

const TodoPlanDetail = ({ navigation }) => (
  <View>
    <Header
      iconLeft={images.icon_back}
      onPressLeft={() => navigation.goBack()}
    />
    <Text>ABC XYZ</Text>
  </View>
);

const styles = StyleSheet.create({

});


export default withNavigation(TodoPlanDetail);
