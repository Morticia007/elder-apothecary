import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function About({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <Card styles={{ padding: 10 }}>
        <Card.Title>
          'Light a fire of truth around your life, and all that is false in this
          world will cower at the sight of you.'
        </Card.Title>
        <Card.Title> ~ Mia Hollow ~ </Card.Title>
        <Card.Title> Quotes by Mia Hollow</Card.Title>
      </Card>
    </ScrollView>
  );
}

export default About;
