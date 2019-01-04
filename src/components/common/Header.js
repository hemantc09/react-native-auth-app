//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
  //step 2 for styling
  //destructuring below
  const { textStyle, viewStyle } = styles;

  //step 3 for styling
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//for styling its similar to creating props and passing it
//step 1 for style
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    positin: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//make a component available to other App
export { Header };
