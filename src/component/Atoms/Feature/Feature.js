import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {TransferIcon} from '../../../theme/Icons';

function FeatureBox({text = 'Transfer', children}) {
  return (
    <TouchableOpacity>
      <View style={styles.FeatureContainer}>
        <View style={styles.FeatureBox}>{children}</View>
        <View>
          <Text style={styles.FeatureText}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  FeatureContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  FeatureBox: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: 48,
    height: 48,
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.84,

    elevation: 4,
  },
  FeatureText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#8438FF',
  },
});
export default FeatureBox;
