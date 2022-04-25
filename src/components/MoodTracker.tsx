import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MoodOptionType } from '../../types';
import { theme } from '../theme';

const moodOptions: MoodOptionType[] = [
  { emoji: '🙂', description: 'smile' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '🥳', description: 'party' },
  { emoji: '😐', description: 'neutral' },
  { emoji: '😥', description: 'sad' },
];
type MoodPickerProps = {
  handleSelectMood: (moodOption: MoodOptionType) => void;
};

export const MoodTracker: React.FC<MoodPickerProps> = ({
  handleSelectMood,
}) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  const handleSelect = React.useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood);
      setSelectedMood(undefined);
    }
  }, [handleSelectMood, selectedMood]);
  return (
    <View style={styles.moodBlock}>
      <Text style={styles.text}>How are you right now ?</Text>
      <View style={styles.moodOptionList}>
        {moodOptions.map((option) => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                selectedMood?.emoji === option.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}
            >
              <Text style={styles.emoji} key={option.emoji}>
                {option.emoji}
              </Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {option.emoji === selectedMood?.emoji
                ? option.description
                : undefined}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.container}>
        <Pressable onPress={handleSelect}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  moodOptionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodBlock: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: theme.colorPurple,
    marginHorizontal: 10,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  emoji: {
    fontSize: 30,
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedMoodItem: {
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#454C73',
  },
  descriptionText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
    color: '#454C73',
    padding: 5,
  },
  text: {
    padding: 10,
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    marginVertical: 20,
    backgroundColor: theme.colorPurple,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colorWhite,
  },
});
