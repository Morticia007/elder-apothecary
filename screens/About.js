import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function About({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <Card styles={{ padding: 30 }}>
        <Card.Title>
          'Light a fire of truth around your life, and all that is false in this
          world will cower at the sight of you.'
        </Card.Title>
        <Card.Title> ~ Mia Hollow ~ </Card.Title>
        <Card.Title> Quotes by Mia Hollow</Card.Title>
      </Card>
      <Card styles={{ padding: 30 }}>
        <Card.Title>Our Mission</Card.Title>
        <Card.Title>
          Welcome to Elder Apothecary. We are so glad you are here. We want
          to help you on your journey to health and wellness. We understand that
          you can be anywhere from a beginner to an expert in herbal health and
          wellness and we will do everything in our power to make you a happy
          returning customer. Fast forward to today I decided to create this
          website to help apothecaries and people come back to thier roots and
          find the balance in life as well as the healer within each and
          everyone of us.{' '}
        </Card.Title>
      </Card>
      <Card styles={{ padding: 30 }}>
        <Card.Title>About the Founder of Elder Apothecary:</Card.Title>
        <Card.Title>
          Ever since I was a child, I had a vision that I was a healer, and as
          time went on I realized I was just that. What I learned along the way
          is we are all healers, we just have to learn how to use our gifts. As
          a society, we have been pushed so far from our roots as a species that
          we are willing to take medicine that basically advertises that it is
          Anti-Biological being. Let me explain what I mean...
        </Card.Title>
      </Card>

      <Card styles={{ padding: 30 }}>
        <Card.Title>Herbal medicine:</Card.Title>
        <Card.Title>Oregano oil</Card.Title>
        <Card.Title>-Anti-microbial, anti-bacterial, anti-fungal-</Card.Title>
        <Card.Title>Western Medicine:</Card.Title>
        <Card.Title>Amoxicillin</Card.Title>
        <Card.Title>-Antibiotic-</Card.Title>
      </Card>
    </ScrollView>
  );
}

export default About;
