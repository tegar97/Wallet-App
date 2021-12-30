import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Circle, CircleBig, CircleWhite} from '../../../theme/Icons';

function Info() {
  return (
    <View style={styles.InfoCard}>
      <Circle style={styles.Circle} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignContent: 'center',
          height: '100%',
        }}>
        <View>
          <Text style={styles.Title}>Balance</Text>
          <Text style={styles.subTitle}>$ 1.234</Text>
        </View>
        <View>
          <Text style={styles.Title}>Card</Text>
          <Text style={styles.subTitle}>Mabank</Text>
        </View>
        <CircleBig style={styles.CircleBigStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InfoCard: {
    backgroundColor: '#45197d',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    height: 140,
    borderRadius: 50,
    position: 'relative',
    flexWrap: 'wrap',
  },

  Circle: {
    transform: [{rotate: '-49deg'}],
    position: 'absolute',
    left: 0,
    top: 15,
  },
  Title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: '#ffff',
    zIndex: 2,
  },
  subTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 24,
    zIndex: 2,

    color: '#ffff',
  },
  CircleBigStyle: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
export default Info;
