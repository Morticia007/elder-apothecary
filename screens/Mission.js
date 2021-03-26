import * as React from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Dimensions, StyleSheet } from 'react-native';

function Mission({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 100, backgroundColor: '#5D7D41' }}>
      <Card styles={{ padding: 30 }}>
        <Card.Title>
          'If you do not take time for your wellness, you will be forced to make
          time for your illness.'
        </Card.Title>

        <Card.Title> Joyce Sunada </Card.Title>
      </Card>

      <Card styles={{ padding: 30 }}>
        <Card.Title>Our Mission</Card.Title>
        <Card.Title>
          Welcome to Elder Apothecary. We are so glad you are here. We want
          to help you on your journey to health and wellness. We understand that
          you can be anywhere from a beginner to an expert in herbal health and
          wellness and we will do everything in our power to make you a happy
          returning customer.
        </Card.Title>
      </Card>
      <Card styles={{ padding: 30 }}>
        <Card.Title>Fast forward to today</Card.Title>
        <Card.Title>
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
