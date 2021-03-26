import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { colors } from '../colors';

function Home({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 10, backgroundColor: colors.lightGray }}>
      <Card containerStyle={{ backgroundColor: colors.green }}>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-1.jpg',
          }}
        />
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Welcome to Elder Apothecary
        </Card.Title>

        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Find your favorite Apothecary products and more
        </Card.Title>
        <Button
          title='Learn More'
          type='solid'
          buttonStyle={{ backgroundColor: colors.gray }}
        />
      </Card>
      <Card containerStyle={{ backgroundColor: colors.green }}>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/deodorant.png',
          }}
        />
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Products you can Trust
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Search multiple apothecaries for products you trust
        </Card.Title>
        <Button
          title='Learn More'
          type='solid'
          buttonStyle={{
            backgroundColor: colors.gray,
          }}
        />
      </Card>
      <Card containerStyle={{ backgroundColor: colors.green }}>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-3.jpeg',
          }}
        />
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          Why Elder Apothecary?
        </Card.Title>
        <Card.Title
          style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}
        >
          It's simple! We care about your health and your time
        </Card.Title>
        <Button
          title='Learn More'
          type='solid'
          buttonStyle={{ backgroundColor: colors.gray }}
        />
      </Card>
    </ScrollView>
  );
}

export default Home;
