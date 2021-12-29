import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {UserIcon} from '../../../theme/Icons';

function Input({placeholder, children}) {
  return (
    <View style={styles.inputContainer}>
      {children}
      <View style={{marginRight: 10}} />
      <TextInput placeholder={placeholder} style={styles.Input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
    paddingLeft: 15,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    backgroundColor: '#F2F2F2',
    width: '100%',
  },
});

export default Input;
