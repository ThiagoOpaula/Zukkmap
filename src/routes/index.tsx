import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ClientList from '../pages/ClientList';
import SignUpClient from '../pages/SingUpClient';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    }}
  >
    <Auth.Screen name="ClientList" component={ClientList} />
    <Auth.Screen name="SignUpClient" component={SignUpClient} />
  </Auth.Navigator>
);

export default AuthRoutes;
