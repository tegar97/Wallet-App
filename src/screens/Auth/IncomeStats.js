import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Views from '../../component/Atoms/Base/Views';
import Chart from '../../component/Atoms/Chart/Chart';
import HeaderBack from '../../component/Atoms/Header/HeaderBack';
import TransactionCard from '../../component/Atoms/Transaction/Card';

function IncomeStats({navigation}) {
  return (
    <ScrollView>
      <View style={{display: 'flex', backgroundColor: '#ffff'}}>
        <View style={{paddingTop: 40, paddingRight: 33, paddingLeft: 33}}>
          <Text style={styles.TitleText}>Income Stats</Text>
        </View>
        <Chart />
        <Views
          paddingLeft={33}
          paddingRight={33}
          paddingBottom={90}
          paddingTop={40}
          scroll={false}>
          <View style={styles.balanceContainer}>
            <Text style={styles.BalanceTitle}>Total Balance</Text>
            <Text style={styles.Balance}>$ 13.248</Text>
          </View>
          <View style={{marginTop: 42}}>
            <View style={styles.TransactionHeader}>
              <Text
                style={{
                  fontFamily: 'Rubik-Medium',
                  color: '#130138',
                  fontSize: 18,
                }}>
                Last Transaction
              </Text>
              <Text
                style={{
                  fontFamily: 'Quicksand-Medium',
                  color: '#8438FF',
                  fontSize: 13,
                }}>
                Latest
              </Text>
            </View>
            <View style={styles.TransactionContainer}>
              <TransactionCard
                name="Netflix"
                price={12}
                type="Month  subscription"
              />
              <TransactionCard name="Paypal" price={52} type="Tax" />
              <TransactionCard name="Paylater" price={42} type="Buy item" />
            </View>
          </View>
        </Views>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  TitleText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    color: '#130138',
  },
  TransactionHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  TransactionContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
  },
  balanceContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  BalanceTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: '#8B98B1',
  },
  Balance: {
    fontFamily: 'Rubik-Medium',
    color: '#9038FF',
    fontSize: 36,
    marginTop: 15,
  },
});
export default IncomeStats;
