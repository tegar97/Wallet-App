import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Views from '../../../component/Atoms/Base/Views';
import HeaderBack from '../../../component/Atoms/Header/HeaderBack';
import TableText from '../../../component/Atoms/TableText';

function DetailCard({navigation}) {
  return (
    <Views
      paddingLeft={33}
      paddingRight={33}
      paddingBottom={40}
      paddingTop={40}
      scroll={true}>
      <HeaderBack navigation={navigation} />
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Detail card</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./../../../assets/images/Card.png')} />
      </View>
      <View style={styles.TableContainer}>
        <TableText rowLeft="Name" rowRight="Jaka mambang" />
        <TableText rowLeft="Account" rowRight=".... .... .... 2138" />
        <TableText rowLeft="Status" rowRight="Active" />
        <TableText rowLeft="Valid" rowRight="2020 - 2025" />
      </View>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity>
          <Text style={styles.DeleteStyle}>Delete Card</Text>
        </TouchableOpacity>
      </View>
    </Views>
  );
}
const styles = StyleSheet.create({
  TextContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 27,
  },
  Title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    color: '#130138',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 52,
  },
  TableContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  DeleteStyle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    color: '#5B259F',
  },
});
export default DetailCard;
