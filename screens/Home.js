import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';

function Home({ navigation }) {
  return (
    <View style={{ marginTop: 30 }}>
      <Card>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-1.jpg',
          }}
        />
        <Card.Title>Welcome to Elder Apothecary</Card.Title>
        <Card.Title>Find your favorite Apothecary products and more</Card.Title>
        <Button title='Learn More' />
      </Card>
      <Card>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-2 .jpg',
          }}
        />
        <Card.Title>Products you can Trust</Card.Title>
        <Card.Title>
          Search multiple apothecaries for products you trust
        </Card.Title>
        <Button title='Learn More' />
      </Card>
      <Card>
        <Card.Image
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/carousel-1800-3.jpeg',
          }}
        />
        <Card.Title>Why Elder Apothecary?</Card.Title>
        <Card.Title>
          It's simple! We care about your health and your time
        </Card.Title>
        <Button title='Learn More' />
      </Card>
    </View>
  );
}

export default Home;

// {/* <View }>
//     <Text>Welcome to Elder Apothecary</Text>
//     <Text>Find your favorite Apothecary products and more</Text>
//     <Button title='Learn More' />
//   </View>
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Products you can Trust</Text>
//     <Text>Search multiple apothecaries for products you trust</Text>
//     <Button title='Learn More' />
//   </View>
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Why Elder Apothecary?</Text>
//     <Text>It's simple! We care about your health and your time.</Text>
//     <Button title='Learn More' />
//   </View> */}
