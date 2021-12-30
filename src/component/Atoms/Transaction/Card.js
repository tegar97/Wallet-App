import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function TransactionCard({name, type, price, logo}) {
  let logoDummy;
  if (name === 'Netflix') {
    logoDummy = require('./../../../assets/images/Netflix.png');
  } else if (name === 'Paypal') {
    logoDummy = require('./../../../assets/images/Paypal.png');
  } else {
    logoDummy = require('./../../../assets/images/Paylatter.png');
  }
  return (
    <View style={styles.TransactionCardContainer}>
      <View style={styles.LeftArea}>
        <View style={{width: 39, height: 39}}>
          <Image source={logoDummy} style={{width: 39}} />
        </View>
        <View style={styles.TransactionCardText}>
          <Text style={styles.BrandTextStyle}>{name}</Text>
          <Text style={styles.TypeStyle}>{type} </Text>
        </View>
      </View>
      <View>
        <Text style={styles.Price}>${price} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TransactionCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  TransactionCardText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 8,
  },
  LeftArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BrandTextStyle: {
    fontFamily: 'Rubik-Regular',
    color: 'black',
    fontSize: 16,
  },
  TypeStyle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#918989',
  },
  Price: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    color: '#363853',
  },
});

export default TransactionCard;
