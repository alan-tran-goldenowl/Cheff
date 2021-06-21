import React, { memo } from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import ContainerInput from 'components/ContainerInput';
import { responsive } from 'utils';
import { COLOR } from 'styles/theme';

const StepOne = ({ plan, onChangeText, isVisible }) => (isVisible ? (
  <View style={styles.container}>
    <Text style={styles.title}>Thông tin giới thiệu</Text>

    <ContainerInput
      label="Tiêu đề"
    >
      <TextInput
        multiline
        defaultValue={plan.title}
        onChangeText={text => onChangeText('title', text)}
        style={[styles.containerTitle, { minHeight: 50 }]}
        placeholder="Nhập..."
      />
    </ContainerInput>

    <ContainerInput
      label="Ghi chú (không bắt buộc)"
    >
      <TextInput
        multiline
        defaultValue={plan.note}
        onChangeText={text => onChangeText('note', text)}
        style={[styles.containerTitle, { minHeight: 150 }]}
        placeholder="Ghi chú"
      />
    </ContainerInput>
  </View>
) : null);

const styles = StyleSheet.create({
  container: {},
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  title: {
    fontSize: responsive({ f: 18 }),
    fontWeight: '700',
  },
});

export default memo(StepOne);
