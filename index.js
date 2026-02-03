import { registerRootComponent } from 'expo';
import App from './App';
import React from 'react';
import { View } from 'react-native';

function Root() {
  return (
    <View style={{ flex: 1, backgroundColor: '#4CAF50' }}>
      <App />
    </View>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);