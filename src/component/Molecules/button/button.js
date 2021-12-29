import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';

function Button({backgroundColor, color, children}) {
  return (
    <TouchableOpacity>
      <View style={ButtonStyle(backgroundColor, color)}>
        <Text
          style={{color: color, fontFamily: 'Quicksand-Bold', fontSize: 18}}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const ButtonStyle = function (backgroundColor, color) {
  return {
    backgroundColor,
    width: 193,
    height: 63,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};
export default Button;
