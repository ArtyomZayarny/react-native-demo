import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodTracker } from '../components/MoodTracker';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodTracker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
