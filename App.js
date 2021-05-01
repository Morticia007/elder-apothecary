import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Products from './screens/Products';
import Contact from './screens/Contact';
import About from './screens/About';
import Blog from './screens/Blog';
import Mission from './screens/Mission';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

const Drawer = createDrawerNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='SignUp' component={SignUp} />
        <Drawer.Screen name='Products' component={Products} />
        <Drawer.Screen name='Mission' component={Mission} />
        <Drawer.Screen name='About Us' component={About} />
        <Drawer.Screen name='Contact Us' component={Contact} />
        <Drawer.Screen name='Blog' component={Blog} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
