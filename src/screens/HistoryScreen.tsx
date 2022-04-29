import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const Historty: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      {appContext.moodList.map((item) => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </View>
  );
};
