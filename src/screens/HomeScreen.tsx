import { format } from 'date-fns';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodOptionType, MoodOptionWithTimestamp } from '../../types';
import { MoodItemRow } from '../components/MoodItemRow';
import { MoodTracker } from '../components/MoodTracker';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
    setMoodList((current) => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <MoodTracker handleSelectMood={handleSelectMood} />
      {moodList.map((item) => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
