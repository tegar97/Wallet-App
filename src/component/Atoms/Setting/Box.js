import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowRight, ProfileSettingIcon} from '../../../theme/Icons';

function SettingBox() {
  return (
    <View style={styles.SettingBoxContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <ProfileSettingIcon />
        </View>
        <Text style={styles.Text}>Profile</Text>
      </View>
      <View>
        <ArrowRight />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SettingBoxContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: '#130138',
  },
});

export default SettingBox;
