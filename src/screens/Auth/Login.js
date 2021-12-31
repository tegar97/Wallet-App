import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Views from '../../component/Atoms/Base/Views';
import Auth from '../../component/Atoms/Card/Auth';
import Button from '../../component/Molecules/button/button';
import Input from '../../component/Molecules/input/input';
import {
  EmailIcon,
  GoogleIcons,
  PasswordIcon,
  UserIcon,
} from '../../theme/Icons';
function Login({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#ffff',
        height: '100%',
        display: 'flex',
      }}>
      <ScrollView style={{height: '100%', display: 'flex'}}>
        <Views paddingLeft={46} paddingRight={47} paddingBottom={40}>
          <View style={styles.ScreenContainer}>
            <Text style={styles.Title}>Welcome back</Text>
            <Text style={styles.Title}> to Mabank Wallet</Text>
            <Text style={styles.subTitle}>Login with</Text>
            <View style={styles.AlternatifAuth}>
              <Auth Icon="Google">Google</Auth>
              <Auth
                Icon="Facebook"
                backgroundColor="#4368C7"
                textColor="#FFFFFF">
                Facebook
              </Auth>
            </View>
            <View style={{display: 'flex', width: '100%', marginTop: 38}}>
              <Input placeholder="Username">
                <UserIcon />
              </Input>

              <Input type="password" placeholder="Password">
                <PasswordIcon />
              </Input>
            </View>
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Button
                onPress={() =>
                  navigation.navigate('ScreemWithNavBottom', {screen: 'Home'})
                }
                backgroundColor="#5B259F"
                color="#ffff">
                Login
              </Button>
              <Text style={{textAlign: 'center', marginTop: 10}}>
                Don't have an account yet?{' '}
                <Text style={{color: '#81C2FF'}}>Register</Text>
              </Text>
            </View>
          </View>
        </Views>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  ScreenContainer: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    color: '#2F1155',
    textAlign: 'center',
    lineHeight: 28,
  },
  subTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    color: '#BDBDBD',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 50,
  },
  AlternatifAuth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 22,
  },
});

export default Login;
