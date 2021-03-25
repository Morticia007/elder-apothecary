import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

function Contact({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card title='Contact Information'>
          <Text> Elder Apothecary</Text>
          <Text>Dallas Texas </Text>
          <Text style={{ marginBottom: 10 }}>U.S.A </Text>
          <Text>Phone:1-512-777-9829</Text>
          <Text>Email: elderapothecary@icloud.com</Text>
          <Button
            title='Send Email'
            buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
            icon={
              <Icon
                name='envelope-o'
                type='font-awesome'
                color='#fff'
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => this.sendMail()}
          />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
}

export default Contact;
