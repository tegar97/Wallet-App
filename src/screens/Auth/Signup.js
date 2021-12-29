import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Views from '../../component/Atoms/Base/Views';
import Auth from '../../component/Atoms/Card/Auth';
import COLORS from '../../theme/Colors';
import {FONTS} from '../../theme/Font';
import {GoogleIcons} from '../../theme/Icons';
GoogleIcons;
function Signup() {
  return (
    <Views paddingLeft={46} paddingRight={47}>
      <View style={styles.ScreenContainer}>
        <Text style={styles.Title}>
          Immediately feel the ease of transacting just by registering
        </Text>
        <Text style={styles.subTitle}>Sign up with</Text>
        <View style={styles.AlternatifAuth}>
          <Auth Icon="Google">Google</Auth>
          <Auth Icon="Facebook" backgroundColor="#4368C7" textColor="#FFFFFF">
            Facebook
          </Auth>
        </View>
      </View>
    </Views>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    color: '#2F1155',
    textAlign: 'center',
    lineHeight: 28,
  },
  subTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    color: '#BDBDBD',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 50,
  },
  AlternatifAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Signup;
