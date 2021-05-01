import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { postData } from '../utils';

class SignUp extends Component {
  // set initial form values to empty strings
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    company: '',
    email: '',
    message: '',
    error: '',
  };

  handleSubmit = async () => {
    const { firstName, lastName, userName, company, email } = this.state;
    // when a user clicks submit send a post request to the users/signup route in express
    // this save the user data in mongodb via the express route in EA server
    try {
      const { message } = await postData('http://localhost:3000/users/signup', {
        firstName,
        lastName,
        userName,
        company,
        email,
      });
      this.setState(
        {
          message,
        },
        () => {
          // reset the form when the user clicks submit
          this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            company: '',
            email: '',
          });
        },
      );
    } catch (err) {
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
          name='firstName'
          placeholder='Enter Your First Name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ firstName: value })}
          value={this.state.firstName}
        />
        <Input
          placeholder='Enter Your Last Name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ lastName: value })}
          value={this.state.lastName}
        />
        <Input
          placeholder='Enter Your User Name'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ userName: value })}
          value={this.state.userName}
        />
        <Input
          placeholder='Enter Your Company Name'
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
