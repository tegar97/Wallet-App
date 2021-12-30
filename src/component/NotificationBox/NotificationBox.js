import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowDown, ArrowUp} from '../../theme/Icons';

function NotificationBox({
  date,
  description,
  type,
  isNew,
  isIncomingTransaction,
}) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.NotificationBox}>
        <View style={styles.TextArea}>
          <Text style={styles.HelperText}>{date}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.HelperText}>"{type}"</Text>
        </View>
        <View>{isIncomingTransaction ? <ArrowUp /> : <ArrowDown />}</View>
        {isNew && <View style={styles.NewNotify}></View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  NotificationBox: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#ffff',
    borderRadius: 16,
    paddingLeft: 27,
    paddingRight: 27,
    paddingTop: 12,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    position: 'relative',

    elevation: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  TextArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
  },
  HelperText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#B7B6B6',
    marginBottom: 2,
    marginTop: 2,
  },
  description: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
  NewNotify: {
    backgroundColor: 'red',
    width: 10,
    borderRadius: 10,
    height: 10,
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 2,
  },
});
export default NotificationBox;
