import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoodOptionType, MoodOptionWithTimestamp } from '../../types';
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
        <Text key={item.timestamp}>
          <>
            {item.mood.emoji} {new Date(item.timestamp).toString()}
          </>
        </Text>
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
