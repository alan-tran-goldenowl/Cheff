import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const CustomTextInput = ({ 
  title, 
  placeholder, 
  value, 
  onChangeText,
  icon,
  error 
}) => {
  const inputRef = useRef(null)

  const onTouchInput = ()=>{
    onChangeText && inputRef?.current?.focus()
  }

  return (
    <View style={styles.viewTextInput}>
      <Text style={styles.textInput}>
        {title}
      </Text>
      <TouchableOpacity 
        onPress={onTouchInput} 
        style={styles.row}
        activeOpacity={1}
      >
      <TextInput
        multiline={false}
        style={{...styles.text,width:icon ? '90%':'100%'}}
        placeholder={placeholder}
        value={value}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        ref={inputRef}
        editable={!!onChangeText}
      />
      {
        icon && (
          <Image style={styles.icon} source={icon}/>
        )
      }
      </TouchableOpacity>
      {!!error && <Text style={styles.errorText}>{error}</Text> }
    </View>
  )
}

export default CustomTextInput;
