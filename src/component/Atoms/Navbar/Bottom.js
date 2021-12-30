import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function NavBottom() {
  return (
    <View style={styles.NavBottom}>
      <Text>tesasss</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  NavBottom: {
    width: '100%',
    display: 'flex',
    height: 147,
    backgroundColor: '#2F1155',
    zIndex: 10,
    bottom: 10,
  },
});

export default NavBottom;
