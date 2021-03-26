import * as React from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { colors } from '../colors';

function Mission({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 100, backgroundColor: colors.lightGray }}>
      <Card
        styles={{ padding: 30 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-BoldItalic' }}
        >
          'If you do not take time for your wellness, you will be forced to make
          time for your illness.'
        </Card.Title>

        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          {' '}
          Joyce Sunada{' '}
        </Card.Title>
      </Card>

      <Card
        styles={{ padding: 30 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title style={{ color: 'white' }}>Our Mission</Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Welcome to Elder Apothecary. We are so glad you are here. We want
          to help you on your journey to health and wellness. We understand that
          you can be anywhere from a beginner to an expert in herbal health and
          wellness and we will do everything in our power to make you a happy
          returning customer.
        </Card.Title>
      </Card>
      <Card
        styles={{ padding: 30 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title style={{ color: 'white' }}>
          Fast forward to today
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          I decided to create this website to help apothecaries and people come
          back to thier roots and find the balance in life as well as the healer
          within each and everyone of us.{' '}
        </Card.Title>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containter: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: 'red',
  },
});

// return (
//   <View>
//     <ScrollView style={[styles.scrollview]}>
//       <OurLoginComponents />
//     </ScrollView>
//     <ImageBackground
//       style={[styles.fixed, styles.containter, { zIndex: -1 }]}
//       source={{ uri: '' }}
//     />
//   </View>
// );

export default Mission;
