import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { postData } from '../utils';

class SignUp extends Component {
  // set initial form values to empty strings
  state = {
    firstname: '',
    lastname: '',
    username: '',
    company: '',
    email: '',
    message: '',
    error: '',
    password: '',
  };

  handleSubmit = async () => {
    const {
      firstname,
      lastname,
      username,
      company,
      email,
      password,
    } = this.state;
    // when a user clicks submit send a post request to the users/signup route in express
    // this save the user data in mongodb via the express route in EA server
    try {
      const { message } = await postData('http://localhost:3000/users/signup', {
        firstname,
        password,
        lastname,
        username,
        company,
        email,
        password,
      });
      this.setState(
        {
          message,
        },
        () => {
          // reset the form when the user clicks submit
          this.setState({
            firstname: '',
            lastname: '',
            username: '',
            company: '',
            email: '',
            password: '',
          });
        },
      );
    } catch (err) {
      console.log({ err });
      // if the request fails set a message to the error key in state
      this.setState({
        error: 'error registering',
      });
    }
  };

  render() {
    const { error, message } = this.state;
    return (
      <View style={{ paddingTop: 50 }}>
        <Input
          name='firstname'
          placeholder='Enter Your First name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ firstname: value })}
          value={this.state.firstname}
        />
        <Input
          placeholder='Enter Your Last name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ lastname: value })}
          value={this.state.lastname}
        />
        <Input
          placeholder='Enter Your User name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ username: value })}
          value={this.state.username}
        />
        <Input
          placeholder='Enter Your Company name'
          leftIcon={{ type: 'font-awesome', name: 'building' }}
          onChangeText={(value) => this.setState({ company: value })}
          value={this.state.company}
        />
        <Input
          placeholder='Enter Your Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(value) => this.setState({ email: value })}
          value={this.state.email}
        />
        <Input
          placeholder='Enter Your Password'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(value) => this.setState({ password: value })}
          value={this.state.password}
        />
        <View>
          <Button onPress={this.handleSubmit} title='Submit' />
        </View>
        <View>
          <Text>{message || error}</Text>
        </View>
      </View>
    );
  }
}

export default SignUp;
