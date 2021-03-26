import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { colors } from '../colors';
function About({ navigation }) {
  return (
    <ScrollView
      style={{
        marginTop: 90,
        marginBottom: 50,
        backgroundColor: colors.lightGray,
      }}
    >
      <Card
        styles={{ marginTop: 50, marginBottom: 50, padding: 60 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-BoldItalic' }}
        >
          Light a fire of truth around your life, and all that is false in this
          world will cower at the sight of you.
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          {' '}
          ~ Mia Hollow ~{' '}
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          {' '}
          Quotes by Mia Hollow
        </Card.Title>
      </Card>

      <Card
        styles={{ marginTop: 60, padding: 60 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title style={{ color: 'white' }}>
          About the Founder of Elder Apothecary
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Ever since I was a child, I had a vision that I was a healer, and as
          time went on I realized I was just that. What I learned along the way
          is we are all healers, we just have to learn how to use our gifts. As
          a society, we have been pushed so far from our roots as a species that
          we are willing to take medicine that basically advertises that it is
          Anti-Biological being. Let me explain what I mean...
        </Card.Title>
      </Card>

      <Card
        styles={{ marginTop: 60, padding: 100 }}
        containerStyle={{ backgroundColor: colors.green }}
      >
        <Card.Title style={{ color: 'white' }}>
          Herbal medicine (example):
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Oregano oil
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          -Anti-microbial, anti-bacterial, anti-fungal-
        </Card.Title>
        <Card.Title style={{ color: 'white' }}>
          Western Medicine (example):
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Amoxicillin
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          -Antibiotic-
        </Card.Title>
      </Card>
    </ScrollView>
  );
}

export default About;
