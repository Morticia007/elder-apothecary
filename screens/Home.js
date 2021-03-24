import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Elder Apothecary</Text>
        <Text>Find your favorite Apothecary products and more</Text>
        <Button title='Learn More' />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Products you can Trust</Text>
        <Text>Search multiple apothecaries for products you trust</Text>
        <Button title='Learn More' />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Why Elder Apothecary?</Text>
        <Text>It's simple! We care about your health and your time.</Text>
        <Button title='Learn More' />
      </View>
    </View>
  );
}

export default Home;
