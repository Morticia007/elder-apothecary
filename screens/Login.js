import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { postData } from '../utils';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async () => {
    const { username, password } = this.state;

    try {
      const { message } = await postData('http://localhost:3000/users/login', {
        username,
        password,
      });
      this.setState(
        {
          message,
        },
        () => {
          // reset the form when the user clicks submit
          this.setState({
            username: '',
            email: '',
          });
        },
      );
    } catch (err) {
      console.log({ err });
      this.setState({
        error: 'error logging in',
      });
    }
  };

  render() {
    const { error, message } = this.state;
    return (
      <View style={{ paddingTop: 50 }}>
        <Input
          name='firstname'
          placeholder='Enter Your Username'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => this.setState({ username: value })}
          value={this.state.username}
        />
        <Input
          name='firstname'
          placeholder='Enter Your Password'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
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

export default Login;
