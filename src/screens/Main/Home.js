import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Views from '../../component/Atoms/Base/Views';
import Info from '../../component/Atoms/Card/Info';
import FeatureBox from '../../component/Atoms/Feature/Feature';
import {TransferIcon, PaymentIcon, TopUpIcon, Payout} from '../../theme/Icons';
function Home() {
  return (
    <View style={{backgroundColor: '#ffff', height: '100%', display: 'flex'}}>
      <ScrollView>
        <Views
          paddingLeft={33}
          paddingRight={33}
          paddingBottom={40}
          paddingTop={40}>
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
            <Info />
          </View>
          <View style={styles.FeatureContainer}>
            <FeatureBox text="Transfer">
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
        </Views>
      </ScrollView>
    </View>
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
});

export default Home;
