import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { ScrollView, Text, ImageBackground } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { colors } from '../colors';
import { Input } from 'react-native-elements/dist/input/Input';
function Contact({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 50, backgroundColor: colors.lightGray }}>
      <ImageBackground
        style={{ heigh: 100, width: 100 }}
        source={{
          uri:
            '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/assets/Astrid copy.JPG',
        }}
      />
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card
          title='Contact Information'
          style={{ margin: 300 }}
          containerStyle={{ backgroundColor: colors.green }}
        >
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
            Elder Apothecary
          </Text>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
            Dallas Texas
          </Text>
          <Text
            style={{
              marginBottom: 10,
              color: 'white',
              fontFamily: 'Montserrat-Regular',
            }}
          >
            U.S.A
          </Text>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
            Phone:1-512-777-9829
          </Text>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>
            Email: elderapothecary@icloud.com
          </Text>
          <Button
            title='Send Email'
            buttonStyle={{ backgroundColor: colors.gray, margin: 40 }}
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
      <Card containerStyle={{ backgroundColor: colors.green }}>
        <Card.Image
          style={{ height: 500 }}
          source={{
            uri:
              '/Users/jacquelynhagman/workspaces/gitrepos/elder-apothecary/screens/ElderApothecary_v1light .png',
          }}
        ></Card.Image>
      </Card>
    </ScrollView>
  );
}

export default Contact;
