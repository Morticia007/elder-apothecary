import * as React from 'react';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native';

function Mission({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 40 }}>
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

export default Mission;
