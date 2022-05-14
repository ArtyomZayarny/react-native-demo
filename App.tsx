import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { AppProvider } from './src/App.provider';
import { BottomTabsNavigator } from './src/navigation/BottomTabs.navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { theme } from './src/theme';

const fetchFonts = () => {
  return Font.loadAsync({
    'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'Kalam-Light': require('./assets/fonts/Kalam-Light.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.warn}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
