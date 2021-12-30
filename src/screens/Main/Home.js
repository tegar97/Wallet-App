import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Views from '../../component/Atoms/Base/Views';
import Info from '../../component/Atoms/Card/Info';
import FeatureBox from '../../component/Atoms/Feature/Feature';
import TransactionCard from '../../component/Atoms/Transaction/Card';
import {TransferIcon, PaymentIcon, TopUpIcon, Payout} from '../../theme/Icons';
import NavBottom from '../../component/Atoms/Navbar/Bottom';
function Home({navigation}) {
  return (
    <Views
      paddingLeft={33}
      paddingRight={33}
      paddingBottom={90}
      paddingTop={40}
      scroll={true}
      position="relative">
      <View style={styles.Header}>
        <View>
          <Text style={styles.Title}>Wallet</Text>
          <Text style={styles.active}>Active</Text>
        </View>
        <View>
          <Image
            source={require('./../../assets/images/Profil-picture.png')}
            style={{width: 56, height: 56}}
          />
        </View>
      </View>
      <View style={{marginTop: 42}}>
        <Info navigation={navigation} />
      </View>
      <View style={styles.FeatureContainer}>
        <FeatureBox
          onPress={() => navigation.navigate('Transfer')}
          text="Transfer">
          <TransferIcon />
        </FeatureBox>
        <FeatureBox text="Payment">
          <PaymentIcon />
        </FeatureBox>
        <FeatureBox text="Payout">
          <Payout />
        </FeatureBox>
        <FeatureBox text="Top up">
          <TopUpIcon />
        </FeatureBox>
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
            View All
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
  );
}

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  active: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    color: '#BDBDBD',
  },
  Title: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
    color: '#130138',
  },
  FeatureContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
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
});

export default Home;
