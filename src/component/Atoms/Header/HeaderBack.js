import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../../../theme/Icons';

function HeaderBack({navigation}) {
  return (
    <View styles={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderContainer: {
    width: '100%',
    display: 'flex',
  },
});

export default HeaderBack;
