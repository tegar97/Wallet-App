import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DeleteIcon} from '../../../theme/Icons';
function VirtualKeyboard({amountPrev, setAmount}) {
  const changeAmount = amount => {
    let tempAmount = amount;
    let finalyAmount;
    if (amountPrev == false) {
      amountPrev = '';

      finalyAmount = amountPrev.toString() + tempAmount.toString();
    } else {
      finalyAmount = amountPrev.toString() + tempAmount.toString();
    }

    setAmount(finalyAmount);
    console.log(amount);
  };

  const deleteAmount = () => {
    setAmount(amountPrev.slice(0, amountPrev.length - 1));
  };
  return (
    <View style={styles.VirtualKeyboardContainer}>
      <TouchableOpacity
        style={styles.NumberGroup}
        onPress={() => changeAmount(1)}>
        <Text style={styles.NumberStyle}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.NumberGroup}
        onPress={() => changeAmount(2)}>
        <Text style={styles.NumberStyle}>2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeAmount(3)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(4)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(5)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(6)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(7)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(8)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount(9)}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount('00')}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeAmount('0')}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteAmount()}
        style={styles.NumberGroup}>
        <Text style={styles.NumberStyle}>
          <DeleteIcon />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  VirtualKeyboardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  NumberGroup: {
    width: '33.2%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 30,
  },
  NumberStyle: {
    fontSize: 42,
    color: '#363853',
    fontFamily: 'Quicksand-Medium',
  },
});

export default VirtualKeyboard;
