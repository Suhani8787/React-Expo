import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SWListScreen} from './screens/SWListScreen.js';
import {SWDetailScreen} from './screens/SWDetailScreen.js';
import { SWListProvider } from './components/SWListContext.js';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <SWListProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="SWListScreen">
          <Drawer.Screen name="SWListScreen" component={SWListScreen} />
          <Drawer.Screen name="SWDetailScreen" component={SWDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SWListProvider>
  );
};

export default App;