import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import COLORS from '../../../theme/Colors';
import PropTypes from 'prop-types';

function Views({
  scroll,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
  background = COLORS.white,
  position = 'relative',
  children,
}) {
  if (scroll == true) {
    return (
      <View
        style={{
          backgroundColor: background,
          height: '100%',
          display: 'flex',
        }}>
        <ScrollView>
          <View
            style={BaseViews(
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
              background,
              position,
            )}>
            {children}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View
        style={BaseViews(
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
          background,
        )}>
        {children}
      </View>
    );
  }
}

const BaseViews = function (
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  background,
  position,
) {
  return {
    backgroundColor: background,
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    position: 'relative',
  };
};

Views.prototype = {
  scroll: PropTypes.bool,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
};

export default Views;
