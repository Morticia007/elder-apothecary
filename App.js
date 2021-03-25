import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Blog from './screens/Blog';
import Mission from './screens/Mission';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Mission' component={Mission} />
        <Drawer.Screen name='About Us' component={About} />
        <Drawer.Screen name='Contact Us' component={Contact} />
        <Drawer.Screen name='Blog' component={Blog} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
