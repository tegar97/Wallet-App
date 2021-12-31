import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Views from '../../../component/Atoms/Base/Views';
import HeaderBack from '../../../component/Atoms/Header/HeaderBack';
import SettingBox from '../../../component/Atoms/Setting/Box';

function Setting() {
  return (
    <Views
      paddingLeft={33}
      paddingRight={33}
      paddingBottom={90}
      paddingTop={40}
      scroll={true}>
      <HeaderBack />

      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Settings</Text>
      </View>
      <View style={{marginTop: 20}}>
        <SettingBox />
      </View>
    </Views>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    color: '#2F1155',
    textAlign: 'center',
    lineHeight: 28,
  },
  TextContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 20,
  },
});

export default Setting;
