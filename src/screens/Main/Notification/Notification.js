import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Views from '../../../component/Atoms/Base/Views';
import HeaderBack from '../../../component/Atoms/Header/HeaderBack';
import NotificationBox from '../../../component/NotificationBox/NotificationBox';

function Notification() {
  return (
    <Views
      paddingLeft={33}
      paddingRight={33}
      paddingBottom={90}
      paddingTop={40}
      scroll={true}>
      <HeaderBack />
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Notification</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.NotificationTextContainer}>
          <Text style={styles.NotificationText}>New</Text>
        </View>
        <NotificationBox
          date="29 June 2021, 7.14 PM"
          description="You received Rp 100.000 from Alexandr Gibson Jogja"
          type="Pay debt"
          isNew={true}
          isIncomingTransaction={true}
        />
        <NotificationBox
          date="29 June 2021, 9.02 AM"
          description="You spent Rp 32.000 for Coffe Cetar back Tugu Sentral"
          type="Buy Drink"
          isNew={true}
        />
      </View>
      <View style={{marginTop: 5}}>
        <View style={styles.NotificationTextContainer}>
          <Text style={styles.NotificationText}>Recent</Text>
        </View>
        <NotificationBox
          date="28 June 2021, 8.32 PM"
          description="You spent Rp 210.000 for pay Tokosbla ijo mera"
          type="Buy items"
          isNew={false}
          isIncomingTransaction={false}
        />

        <NotificationBox
          date="28 June 2021, 8.32 PM"
          description="You spent Rp 210.000 for pay Tokosbla ijo mera"
          type="Buy items"
          isNew={false}
          isIncomingTransaction={false}
        />

        <NotificationBox
          date="28 June 2021, 8.32 PM"
          description="You spent Rp 210.000 for pay Tokosbla ijo mera"
          type="Buy items"
          isNew={false}
          isIncomingTransaction={false}
        />
      </View>
    </Views>
  );
}
const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    color: '#2F1155',
    textAlign: 'center',
    lineHeight: 28,
  },
  TextContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 20,
  },
  NotificationTextContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  NotificationText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: '#363853',
    textAlign: 'center',
    lineHeight: 28,
  },
});
export default Notification;
