import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderBack from '../../component/Atoms/Header/HeaderBack';
import Views from '../../component/Atoms/Base/Views';
import {ArrowBottom} from '../../theme/Icons';
import VirtualKeyboard from '../../component/Atoms/VirtualKeyboard/VirtualKeyboard';

function Transfer({navigation}) {
  const [amount, setAmount] = useState(false);
  return (
    <Views
      paddingLeft={33}
      paddingRight={33}
      paddingBottom={40}
      paddingTop={40}
      scroll={true}>
      <HeaderBack navigation={navigation} />
      <View style={styles.moneyTransferContainer}>
        <Text style={styles.moneyTransfer}>${amount}</Text>
      </View>
      <View style={styles.SelectBankContainer}>
        <Text style={styles.BankName}>Mabank</Text>
        <ArrowBottom />
      </View>
      <View style={{display: 'flex', width: '100%', marginTop: 20}}>
        <VirtualKeyboard amountPrev={amount} setAmount={setAmount} />
      </View>
    </Views>
  );
}
const styles = StyleSheet.create({
  moneyTransferContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 52,
  },
  moneyTransfer: {
    fontFamily: 'Rubik-Medium',
    fontSize: 36,
    color: '#2F1155',
  },
  SelectBankContainer: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 66,
    paddingLeft: 37,
    paddingRight: 37,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
  },
  BankName: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    color: '#363853',
  },
});
export default Transfer;
