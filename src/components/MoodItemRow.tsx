import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodOptionWithTimestamp } from '../../types';
import { theme } from '../theme';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};
export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cdcad4',
    borderRadius: 10,
    padding: 20,
    margin: 5,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems:'center',
  },
  moodValue: {
    fontSize: 30,
  },
  moodDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center',
    display: 'flex',
  },
  moodDate: {
    color: theme.colorLavender,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
