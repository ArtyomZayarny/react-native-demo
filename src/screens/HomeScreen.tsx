import { format } from 'date-fns';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodOptionType, MoodOptionWithTimestamp } from '../../types';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';
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
