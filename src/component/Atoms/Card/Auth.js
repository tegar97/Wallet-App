import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import COLORS from '../../../theme/Colors';
import {FacebookIcons, GoogleIcons} from '../../../theme/Icons';

function Auth({Icon, backgroundColor, textColor, children}) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={CardContainer(backgroundColor)}>
        {Icon === 'Google' ? <GoogleIcons /> : <FacebookIcons />}
        <Text style={CardText(textColor)}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const CardContainer = function (backgroundColor = COLORS.white) {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 64,
    backgroundColor: backgroundColor,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 8,
  };
};
const CardText = function (color = '#BDBDBD') {
  return {
    fontSize: 16,
    color: color,
    fontFamily: 'Quicksand-Medium',
    marginLeft: 10,
  };
};
export default Auth;
