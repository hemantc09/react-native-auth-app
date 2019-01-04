import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
      {/*we are receving the parent component <Card> tag children there
      because those are passed as props and access here*/}
        {props.children}
      </View>
  );
};

const styles = {
    containerStyle: {
      borderWidth: 0,
      shadowColor: 'red',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginTop: 50
    }
};

export { Card };
