import * as React from 'react';
import { Card } from 'react-native-elements';
import { View, Image, Text } from 'react-native';
import { colors } from '../colors';

function Product(props) {
  return (
    <Card
      styles={{ padding: 30 }}
      containerStyle={{ backgroundColor: colors.green, marginTop: 60 }}
    >
      <Card.Title
        style={{ color: 'white', fontFamily: 'Montserrat-BoldItalic' }}
      >
        {props.name}
      </Card.Title>

      <Card style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
        <Card.Title>{props.description}</Card.Title>
      </Card>
      <Card style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
        <Card.Title>{props.price}</Card.Title>
      </Card>
      <View>
        <Image
          style={{ height: 400 }}
          source={{
            uri: props.image,
          }}
        ></Image>
      </View>
    </Card>
  );
}

Product.defaultProps = {
  name: 'No Title Available',
  description: 'No description available',
  price: '$0.00',
  image:
    'https://post.healthline.com/wp-content/uploads/2020/03/oregano-oil-benefits-and-uses-732x549-thumbnail-732x549.jpg',
};

export default Product;
