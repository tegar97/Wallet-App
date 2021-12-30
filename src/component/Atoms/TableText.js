import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TableText({rowLeft, rowRight}) {
  return (
    <View style={styles.TableContainer}>
      <Text style={styles.rowLeft}>{rowLeft}</Text>
      <Text style={styles.rowRight}>{rowRight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TableContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 18,
    flex: 1,
  },
  rowLeft: {
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
    color: '#9D9D9D',
    textAlign: 'left',
    display: 'flex',
    flex: 1,
  },
  rowRight: {
    textAlign: 'left',
    display: 'flex',
    flex: 1,
    fontFamily: 'Quicksand-Medium',
    color: 'black',
    fontSize: 18,
  },
});
export default TableText;
