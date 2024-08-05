import React from 'react';
import Navigation from './src/routes/Navigation';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
