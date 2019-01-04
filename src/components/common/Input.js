{ /*  */ }
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  debugger;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>

      { /*we are recevieing the value and onChangeText from LoginForm here*/ }
      { /* we will secureTextEntry={true} for password only and it wont show text as input
      for email input we are not sending anything from loginform so
      by default it will recevei false */ }
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#020734',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight:  23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#0F1655'
  },
  // flex: 1 means it will filled up all space avaible
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'none'

  }
}
export  { Input };
