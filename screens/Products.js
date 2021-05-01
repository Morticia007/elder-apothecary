import React, { Component } from 'react';
import { ScrollView, FlatList, Text, SafeAreaView } from 'react-native';
import Product from './Product';

// this component fetches a list of products from the express route http://localhost:3000/products
// and renders them to the products screen in the react native application

class Products extends Component {
  state = {
    productsList: [],
    error: '',
  };

  // fetching the products in component did mount to make sure they are available when the screen renders
  componentDidMount = async () => {
    // using async await to make the code cleaner
    try {
      const request = await fetch('http://localhost:3000/products');
      const result = await request.json();
      // if the request is successful, take the products retreived and set them in state to the
      // productsList key
      this.setState({
        productsList: result.data,
      });
    } catch (error) {
      //if not then set the value 'Error fetching products list' to the state error key
      this.setState({
        error: 'Error fetching products list',
      });
    }
  };
  renderProduct = ({ item }) => (
    <Product
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );

  render() {
    //TODO add loading indicator when fetching products list
    const { productsList, error } = this.state;
    return (
      <SafeAreaView>
        {this.state.productsList.length > 0 ? (
          <FlatList
            data={productsList}
            renderItem={this.renderProduct}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <Text>{error}</Text>
        )}
      </SafeAreaView>
    );
  }
}

export default Products;
