import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { colors } from '../colors';
function Home({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 10 }}>
      <Card containerStyle={{ backgroundColor: colors.green }}>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-1.jpg',
          }}
        />
        <Card.Title style={{ color: 'white' }}>
          Welcome to Elder Apothecary
        </Card.Title>
        <Card.Title style={{ color: 'white' }}>
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
        <Card.Title style={{ color: 'white' }}>
          Products you can Trust
        </Card.Title>
        <Card.Title style={{ color: 'white' }}>
          Search multiple apothecaries for products you trust
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
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-3.jpeg',
          }}
        />
        <Card.Title style={{ color: 'white' }}>
          Why Elder Apothecary?
        </Card.Title>
        <Card.Title style={{ color: 'white' }}>
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
