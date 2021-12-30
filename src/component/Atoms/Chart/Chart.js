import React, {useEffect, useState, useRef} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;

function Chart(props) {
  const [progressTime, setProgressTime] = useState(0);

  const fadeChart = useRef(new Animated.Value(0)).current;
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeChart, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeChart]);

  useEffect(() => {
    // Define animation for chart
    Animated.timing(animationValue, {
      toValue: 0.65, // Value to graph
      duration: 1000, // Duration for animation
      useNativeDriver: false,
    }).start();

    // Listen the animation variable and update chart variable
    animationValue.addListener(({value}) => {
      console.log('🚀 ~ animationValue.addListener ~ value', value);
      setProgressTime(value);
    });
  }, [animationValue]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeChart, // Bind opacity to animated value
      }}>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100 * progressTime,
                Math.random() * 100 * progressTime,

                Math.random() * 100 * progressTime,

                Math.random() * 100 * progressTime,

                Math.random() * 100 * progressTime,
                Math.random() * 100 * progressTime,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withOuterLines={false}
        withInnerLines={false}
        withDots={false}
        withHorizontalLabels={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#ffff',
          backgroundGradientFrom: '#ffff',
          backgroundGradientTo: '#ffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(132, 56, 255, 1)`,
          labelColor: (opacity = 1) => `rgba(139, 152, 177, 1)`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Animated.View>
  );
}

export default Chart;
