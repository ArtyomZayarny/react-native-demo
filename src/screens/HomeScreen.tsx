import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodTracker } from '../components/MoodTracker';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <MoodTracker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
